import { redirect } from 'next/navigation'

import { createTeam } from '@/services/server/CreateTeam'
import { css } from 'styled-system/css'

// million-ignore
export default function Join() {
  const createTeamHandler = async (data: FormData) => {
    'use server'
    const name = data.get('name') as string
    const res = await createTeam({ name })
    console.log(res)
    redirect('/create/board')
  }

  return (
    <main className={css({ padding: '5%' })}>
      <form action={createTeamHandler} method='POST'>
        <input type='text' name='name' placeholder='Input a team name' />
        <button type='submit'>Create</button>
      </form>
    </main>
  )
}
