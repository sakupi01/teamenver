'use client'
import { WebContainer } from '@webcontainer/api'
import { useEffect } from 'react'

import { files } from '@/app/files'

import style from './NodeContainer.module.css'

/** @type {import('@webcontainer/api').WebContainer}  */
let webcontainerInstance: WebContainer

export const NodeContainer = () => {
  useEffect(() => {
    window.addEventListener('load', async () => {
      // Call only once
      webcontainerInstance = await WebContainer.boot()
      await webcontainerInstance.mount(files)

      const packageJSON = await webcontainerInstance.fs.readFile('package.json', 'utf-8')
      console.log(packageJSON)
      const installProcess = await webcontainerInstance.spawn('npm', ['install'])

      installProcess.output.pipeTo(
        new WritableStream({
          write(data) {
            console.log(data)
          },
        }),
      )

      const textareaEl = document!.querySelector('textarea')
      if (textareaEl != null) {
        textareaEl.value = files['index.js'].file.contents
      }
    })
  }, [])

  return (
    <div className={style.container}>
      <div className={style.editor}>
        <textarea className={style.textarea} defaultValue='Start Coding!'></textarea>
      </div>
      <div className='preview'>
        <iframe src='/loading.html'></iframe>
      </div>
    </div>
  )
}
