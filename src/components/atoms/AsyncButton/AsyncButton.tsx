'use client'
import React from 'react'

// import './button.css'


import { button } from './asyncButton.css'


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
  clickAction?: () => Promise<void>
}

/**
 * Primary UI component for user interaction
 */
export const AsyncButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {

  const mode = primary ? 'primary' : 'secondary'
  return (
    <>
      <button
        type='button'
        className={button({ type: mode, size: size })}
        onClick={
          async () => {
            await props.clickAction!()
          }
        }
      >
        {label}
        <style jsx>{`
          button {
            background-color: ${backgroundColor};
          }
        `}</style>
      </button >
    </>
  )
}
