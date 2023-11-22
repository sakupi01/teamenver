'use client'

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { deleteCookies } from '@/libs/actions/deleteCookies'

const errorTemplate = ({
  message,
  isUnAuthorized,
  router,
}: {
  message: string
  isUnAuthorized?: boolean
  router: AppRouterInstance
}) => {
  return (
    <main className={'min-h-screen px-[10%] py-[5%]'}>
      <div className='flex flex-col justify-center items-center gap-8'>
        <p className='scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-8xl'>
          Oops! Something went wrong. 🥲
        </p>
        <p>Error content: {message}</p>
        <p>
          There&apos; might be something wrong with cookies. <br /> Go back and select the
          team again, thank you!🌟
        </p>
        {isUnAuthorized ? (
          <Button onClick={() => router.push('/api/auth/logout')}>Logout</Button>
        ) : (
          <Button
            onClick={() => {
              router.push('/select/team')
            }}
          >
            Select Team
          </Button>
        )}
      </div>
    </main>
  )
}
export default function Error({ error }: { error: Error & { digest?: string } }) {
  const router = useRouter()
  const message = error.message

  if (message == 'Unauthorized Error.') {
    deleteCookies()
    return errorTemplate({ message, isUnAuthorized: true, router: router })
  } else {
    return errorTemplate({ message, router: router })
  }
}
