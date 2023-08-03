'use client'
import React from 'react'
import './button.css'
import { useState } from 'react'
import useSWR from 'swr'

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
  // const [isPending, startTransition] = useTransition()
  const [shouldFetch, setShouldFetch] = useState(false)
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    shouldFetch ? `/get/frameworks?query=${label}` : null,
    fetcher,
  )

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  return (
    <>
      <button
        type='button'
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        onClick={() => setShouldFetch(true)}
      >
        {label}
        <style jsx>{`
          button {
            background-color: ${backgroundColor};
          }
        `}</style>
      </button>
      {shouldFetch ? <p>{isLoading ? 'loading...' : JSON.stringify(data)}</p> : ''}
    </>
  )
}
