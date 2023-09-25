'use client'
import React, { useTransition } from 'react'

// import './button.css'
import { useState } from 'react'

import { getNpmLibraries } from '@/services/client/GetNpmLibraries'

import { button } from './button.css'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const [isPending, startTransition] = useTransition()
  const [res, setRes] = useState('')

  const mode = primary ? 'primary' : 'secondary'
  return (
    <>
      <button
        disabled={isPending}
        type='button'
        className={button({ type: mode, size: size })}
        onClick={() =>
          startTransition(() => {
            setRes('roading')
            getNpmLibraries(label).then((res) => setRes(JSON.stringify(res)))
          })
        }
      >
        {label}
        <style jsx>{`
          button {
            background-color: ${backgroundColor};
          }
        `}</style>
      </button>
      {res === 'roading' || isPending ? <p>loading...</p> : <p>{res}</p>}
    </>
  )
}
