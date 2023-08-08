'use client'
import { WebContainer } from '@webcontainer/api'
import { useEffect, useState } from 'react'
import { Terminal } from 'xterm'

import { files } from '@/app/webContainerSideFiles'
import { css } from 'styled-system/css'

import { textarea } from './NodeContainer.css'
import 'xterm/css/xterm.css';


export const NodeContainer = () => {
  const [webcontainer, setWebcontainer] = useState<WebContainer | null>(null)
  
  useEffect(() => {
    const initWebContainer = async () => {
      const wc = await WebContainer.boot()
      setWebcontainer(wc)
    }
    
    initWebContainer()
  }, [])
  
  
  useEffect(() => {
    if (!webcontainer) return
    
    const textarea = document.querySelector('textarea')
    const iframe = document.querySelector('iframe')
    const terminalEl: HTMLElement = document.querySelector('.terminal')!
    // const output = document.getElementById('output')

    if (textarea) {
      // @ts-ignore
      textarea.value = files['index.js'].file.contents
      textarea.addEventListener('input', (event: Event) => {
        if (event.currentTarget) {
          // @ts-ignore
          const content = event.currentTarget.value
          webcontainer.fs.writeFile('/index.js', content)
        } else {
          return
        }
      })
    }

    const installDependencies = async (terminal: Terminal) => {
      const installProcess = await webcontainer.spawn('npm', ['install'])
      installProcess.output.pipeTo(
        new WritableStream({
          write(data) {
            // output!.innerHTML = output!.innerHTML + data + '\n'
            terminal.write(data);
            console.log(data)
          },
        }),
      )
      return installProcess.exit
    }

    const startDevServer = async (terminal: Terminal) => {
        // Run `npm run start` to start the Express app
      const serverProcess = await webcontainer.spawn('npm', [
        'run',
        'start',
      ]);
      serverProcess.output.pipeTo(
        new WritableStream({
          write(data) {
            terminal.write(data);
          },
        })
      );
      webcontainer.on('server-ready', (port, url) => {
        if (iframe) {
          iframe.src = url
        }
      })
    }

    const bootWebContainer = async () => {
      const initTerminal = (terminalEl: HTMLElement) => {
        const terminal = new Terminal({
          convertEol: true,
        });
        terminal.open(terminalEl);
        return terminal;
      }

      const terminal = initTerminal(terminalEl);

      await webcontainer.mount(files)
      // TODO: Install base Frameworks mentioned first in the package.json
      const exitCode = await installDependencies(terminal);
      if (exitCode !== 0) {
        throw new Error('Installation failed');
      };
    // TODO: Install additional libraries and start dev server
      startDevServer(terminal);
    }

    bootWebContainer()
  }, [webcontainer])

  return (
    <div
      className={css({
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      })}
    >
      <div
        className={css({
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          height: '100%',
          width: '100%',
          marginBottom: '20px',
        })}
      >
        <div>
          <p>📝 Editor(Readonly)</p>
          <textarea className={textarea()} defaultValue='Start Coding!'></textarea>
        </div>
        <div className={css({ width: '100%', height: '100%' })}>
          <p>✨ Output</p>
          <iframe
            src='/loading'
            className={css({ height: '100%', width: '100%', borderRadius: '0.5rem' })}
          ></iframe>
        </div>
      </div>
      <div className={css({ width: '100%', height: '100%' })}>
        <p className={css({ marginTop: '20px' })}>🤖 Terminal</p>
        <div className='terminal'></div>
      </div>
    </div>
  )
}
