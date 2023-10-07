'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const handleSelectTeam = (team_id: string) => {
  cookies().set('current_team_id', team_id)
  redirect(`/dashboard/team/${team_id}`)
}
