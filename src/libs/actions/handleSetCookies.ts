'use server'
import { cookies } from 'next/headers'

import * as GetJoinedTeamsApi from '@/api/get/joined_teams/route'

export const handleSetCookies = (
  team_id: string,
  boards: GetJoinedTeamsApi.GetType['teams'][0]['boards'][0],
) => {
  cookies().set('current_team_id', team_id)

  boards && cookies().set('current_board_id', boards.id)
  boards &&
    boards.board_detail &&
    cookies().set('current_board_detail_id', boards.board_detail.id)
}
