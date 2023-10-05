import { cookies } from 'next/headers'

import { Navigation } from '@/components/atoms/Navigation/Navigation'
import { Toaster } from '@/components/ui/toaster'
export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const current_team_id = cookies().get('current_team_id')?.value
  const public_boards_ids = [] as Array<string>
  return (
    <>
      {current_team_id && (
        <Navigation
          current_team_id={current_team_id}
          public_boards_ids={public_boards_ids}
        />
      )}
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <main className='flex flex-col items-center justify-center flex-1 px-15'>
          {children}
        </main>
        <Toaster />
      </div>
    </>
  )
}
