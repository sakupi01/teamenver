'use client'
import { WebContainer } from '@webcontainer/api'
import { useEffect, useState } from 'react'

import { files } from '@/app/webContainerSideFiles'
import { css } from 'styled-system/css'

import { textarea } from './NodeContainer.css'

/** @type {import('@webcontainer/api').WebContainer}  */

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
    const output = document.getElementById('output')

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

    const installDependencies = async () => {
      const installProcess = await webcontainer.spawn('npm', ['install'])
      installProcess.output.pipeTo(
        new WritableStream({
          write(data) {
            output!.innerHTML = output!.innerHTML + data + '\n'
            console.log(data)
          },
        }),
      )
      return installProcess.exit
    }

    const startDevServer = async () => {
      await webcontainer.spawn('npm', ['run', 'start'])
      webcontainer.on('server-ready', (port, url) => {
        if (iframe) {
          iframe.src = url
        }
      })
    }

    const bootWebContainer = async () => {
      await webcontainer.mount(files)
      // TODO: Install base Frameworks mentioned first in the package.json
      const exitCode = await installDependencies()
      if (exitCode !== 0) {
        throw new Error('Installation failed')
      }
      // TODO: Install additional libraries and start dev server
      startDevServer()
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
        <p className={css({ marginTop: '20px' })}>🤖 Execution Log</p>
        <div id='output' className={textarea()}></div>
      </div>
    </div>
  )
}
