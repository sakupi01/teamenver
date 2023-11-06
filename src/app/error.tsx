'use client'

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { deleteCookies } from '@/libs/actions/deleteCookies'

const errorTemplate = ({
  message,
  isUnAuthorized,
  router,
}: {
  message: string
  isUnAuthorized?: boolean
  router?: AppRouterInstance
}) => {
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <h3>{message}</h3>
      {isUnAuthorized && router ? (
        <button onClick={() => router.push('/api/auth/logout')}>Logout</button>
      ) : (
        ''
      )}
    </div>
  )
}
export default function Error({ error }: { error: Error & { digest?: string } }) {
  const router = useRouter()
  const message = error.message
  useEffect(() => {
    console.error(JSON.stringify(error.message, null, 2))
  }, [error])

  if (message == 'Unauthorized Error.') {
    deleteCookies()
    errorTemplate({ message, isUnAuthorized: true, router: router })
  } else {
    errorTemplate({ message })
  }
}
