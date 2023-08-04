'use client'
import { WebContainer } from '@webcontainer/api'
import { useEffect } from 'react'

import style from './NodeContainer.module.css'

/** @type {import('@webcontainer/api').WebContainer}  */
let webcontainerInstance

export const NodeContainer = () => {
  useEffect(() => {
    window.addEventListener('load', async () => {
      // Call only once
      webcontainerInstance = await WebContainer.boot()
    })
  }, [])

  return (
    <div className={style.container}>
      <div className={style.editor}>
        <textarea className={style.textarea} defaultValue='Start Coding!'></textarea>
      </div>
      <iframe src='http://localhost:3000/loading'> </iframe>
    </div>
  )
}
