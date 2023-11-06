'use server'
import { redirect } from 'next/navigation'

import { createTeam } from '@/services/server/CreateTeam'

export const createTeamHandler = async (teamName: string) => {
  const res = await createTeam({ name: teamName })

  redirect(`/dashboard/team/${res.insert_teams?.returning[0].id}`)
}
