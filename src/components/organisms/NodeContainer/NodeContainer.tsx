'use client'
import { WebContainer } from '@webcontainer/api'
import { useEffect, useState } from 'react'
import { Terminal } from 'xterm'
import {FitAddon} from 'xterm-addon-fit'

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

    if (textarea) {
      // @ts-ignore
      textarea.value = files['README.md'].file.contents
      textarea.addEventListener('input', (event: Event) => {
        if (event.currentTarget) {
          // @ts-ignore
          const content = event.currentTarget.value
          webcontainer.fs.writeFile('/README.md', content)
        } else {
          return
        }
      })
    }

    async function startShell(terminal: Terminal) {
      const shellProcess = await webcontainer!.spawn('jsh', {
        terminal: {
          cols: terminal.cols,
          rows: terminal.rows,
        },
      });

      shellProcess.output.pipeTo(
        new WritableStream({
          write(data) {
            terminal.write(data);
          },
        })
      );

      const input = shellProcess.input.getWriter();
      terminal.onData((data) => {
        input.write(data);
      });
      return shellProcess;
    };

    const bootWebContainer = async () => {
      const fitAddon = new FitAddon();
      const initTerminal = (terminalEl: HTMLElement) => {

        const terminal = new Terminal({
          convertEol: true,
        });
        terminal.loadAddon(fitAddon);
        terminal.open(terminalEl);
      
        fitAddon.fit();
        return terminal;
      }

      const terminal = initTerminal(terminalEl);

      await webcontainer.mount(files)

      // Wait for server ready event
      webcontainer.on('server-ready', (port, url) => {
        if (iframe) {
          iframe.src = url
        }
      })
      const shellProcess = await startShell(terminal);
      window.addEventListener('resize', () => {
        fitAddon.fit();
        shellProcess.resize({
          cols: terminal.cols,
          rows: terminal.rows,
        });
      });
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
          <textarea readOnly className={textarea()} defaultValue='⛅️ Reading the instructions...'></textarea>
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
