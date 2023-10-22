'use server'
import { redirect } from 'next/navigation'

import { insertTeamMember } from '@/services/server/InsertTeamMember/index'

import { kvClient } from '../redis/kvClient'

import { handleSetCookies } from './handleSetCookies'

export const handleApproveInvitation = async (
  key: string | undefined,
  team_id: string | undefined,
) => {
  if (team_id === undefined || null || key === undefined || null) {
    redirect('/error/500')
  }
  try {
    // set to db
    const { insert_team_member_one } = await insertTeamMember(team_id)

    // set to cookie
    handleSetCookies(team_id, insert_team_member_one?.teams.team_boards)

    // delete kv from redis
    await kvClient.del(key)

    redirect(`/dashboard/team/${team_id}`)
  } catch (error) {
    await kvClient.del(key)
    redirect('/select/team')
  }
}
