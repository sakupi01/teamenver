'use client'
import { useUser } from '@auth0/nextjs-auth0/client'

import { Button } from '@/components/ui/button'

import { createTeamHandler } from '@/libs/actions/createTeamHandler'
// million-ignore
export default function Join() {
  const { user, isLoading, error } = useUser()
  return (
    <main className={'p-[5%]'}>
      <p>Hello, {user?.nickname}</p>
      <form action={createTeamHandler} method='POST'>
        <input type='text' name='name' placeholder='Input a team name' />
        <Button type='submit'>Crate Team</Button>
      </form>
    </main>
  )
}
