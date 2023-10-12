'use server'
import { redirect } from 'next/navigation'

import { insertTeamMember } from '@/services/server/InsertTeamMember'

export const joinTeamHandler = async (data: FormData) => {
  const team_id = data.get('team_id') as string
  const res = await insertTeamMember(team_id)

  redirect(`/select/team/${res.insert_team_member_one?.team_id}/board`)
}
