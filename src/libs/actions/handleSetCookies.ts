'use server'
import { cookies } from 'next/headers'

import * as GetJoinedTeamsApi from '@/api/get/joined_teams/route'

export const handleSetCookies = (
  team_id: string,
  team_boards: GetJoinedTeamsApi.GetType['teams'][0]['team_boards'],
  boards: GetJoinedTeamsApi.GetType['teams'][0]['boards'][0],
) => {
  cookies().set('current_team_id', team_id)

  team_boards && cookies().set('current_team_board_id', team_boards.id)

  team_boards &&
    team_boards.team_board_detail &&
    cookies().set('current_team_board_detail_id', team_boards.team_board_detail.id)

  boards && cookies().set('current_board_id', boards.id)

  boards &&
    boards.board_detail &&
    cookies().set('current_board_detail_id', boards.board_detail.id)
}
