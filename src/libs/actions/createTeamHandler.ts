'use server'
import { redirect } from 'next/navigation'

import { createTeam } from '@/services/server/CreateTeam'

export const createTeamHandler = async (data: FormData) => {
  const name = data.get('name') as string
  const res = await createTeam({ name })

  redirect(`/dashboard/team/${res.insert_teams?.returning[0].id}`)
}
