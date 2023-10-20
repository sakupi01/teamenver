'use client'

import 'xterm/css/xterm.css'
import { WebContainer } from '@webcontainer/api'
import { useEffect, useState } from 'react'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'

import { getFiles } from '@/app/webContainerSideFiles'
import { ReturnGetTeamBoardDetailType } from '@/services/server/GetTeamBoardDetail'

let ignore = false

export const NodeContainer = ({
  teamBoardDetailWithoutTypename,
}: {
  teamBoardDetailWithoutTypename: ReturnGetTeamBoardDetailType['teamBoardDetailWithoutTypename']
}) => {
  const [webcontainer, setWebcontainer] = useState<WebContainer>()

  useEffect(() => {
    const initWebContainer = async () => {
      const wc = await WebContainer.boot()
      setWebcontainer(wc)
    }
    if (!ignore) {
      initWebContainer()
    }
    return () => {
      ignore = true
    }
  }, [])

  async function startShell(terminal: Terminal) {
    const shellProcess = await webcontainer!.spawn('jsh', {
      terminal: {
        cols: terminal.cols,
        rows: terminal.rows,
      },
    })

    shellProcess.output.pipeTo(
      new WritableStream({
        write(data) {
          terminal.write(data)
        },
      }),
    )

    const input = shellProcess.input.getWriter()
    terminal.onData((data) => {
      input.write(data)
    })
    return shellProcess
  }

  useEffect(() => {
    if (ignore) {
      if (!webcontainer) return

      const textarea = document.querySelector('textarea')
      const iframe = document.querySelector('iframe')
      const terminalEl: HTMLElement = document.querySelector('.terminal')!

      if (textarea) {
        // 即時関数
        ;(async () => {
          const files = await getFiles(teamBoardDetailWithoutTypename)

          // @ts-ignore
          textarea.value = files['README.md'].file.contents
        })()
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

      const bootWebContainer = async () => {
        const fitAddon = new FitAddon()
        const initTerminal = (terminalEl: HTMLElement) => {
          const terminal = new Terminal({
            convertEol: true,
          })
          terminal.loadAddon(fitAddon)
          terminal.open(terminalEl)

          fitAddon.fit()
          return terminal
        }

        const terminal = initTerminal(terminalEl)
        // 即時関数
        ;(async () => {
          await webcontainer.mount(await getFiles(teamBoardDetailWithoutTypename))
        })()

        // Wait for server ready event
        webcontainer.on('server-ready', (port, url) => {
          if (iframe) {
            iframe.src = url
          }
        })
        const shellProcess = await startShell(terminal)
        window.addEventListener('resize', () => {
          fitAddon.fit()
          shellProcess.resize({
            cols: terminal.cols,
            rows: terminal.rows,
          })
        })
      }

      bootWebContainer()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcontainer])

  return (
    <div className={'grid grid-rows-2 gap-4 h-full w-full'}>
      <div className={'grid grid-cols-2 gap-4 mb-5'}>
        <div>
          <p>📝 Information</p>
          <textarea
            readOnly
            className={'full-container rounded-lg bg-black text-white py-2 px-4'}
            defaultValue='⛅️ Reading the instructions...'
          ></textarea>
        </div>
        <div className={'full-container'}>
          <p>✨ Output</p>
          <iframe src='/loading' className={'full-container rounded-lg'}></iframe>
        </div>
      </div>
      <div className={'full-container'}>
        <p className='mt-5'>🤖 Terminal</p>
        <div className='terminal w-full'></div>
      </div>
    </div>
  )
}
