'use client'
import { useUser } from '@auth0/nextjs-auth0/client'

import { Button } from '@/components/ui/button'

import { createTeamHandler } from '@/libs/actions/createTeamHandler'
// million-ignore
export default function Join() {
  const { user, isLoading, error } = useUser()
  // fetch created teams and update the team_member of that if the user selected the team from select box

  // fetch the teams that the user already joined in and redirect them to the designated team page.

  return (
    <main className={'p-[5%]'}>
      <p className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Hello, {user?.nickname}.
      </p>
      <form action={createTeamHandler} method='POST'>
        <input type='text' name='name' placeholder='Input a team name' />
        <Button type='submit'>Crate Team</Button>
      </form>
    </main>
  )
}
