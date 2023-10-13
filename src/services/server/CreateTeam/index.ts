import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import {
  CreateTeamBoardDetailsDocument,
  CreateTeamBoardDocument,
  CreateTeamDocument,
  InsertTeamMemberDocument,
} from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const createTeam = async ({ name }: { name: string | null }) => {
  const session = await getSession()
  const access_token = session?.accessToken
  if (name === null) {
    throw new BadRequestError()
  }
  if (access_token === undefined) {
    throw new UnAuthorizedError()
  }

  try {
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { insert_teams } = await gqlHasuraClient.request(CreateTeamDocument, {
      name: name,
    })

    if (!insert_teams) {
      throw new BadRequestError()
    }

    const { insert_team_member_one } = await gqlHasuraClient.request(
      InsertTeamMemberDocument,
      {
        team_id: insert_teams?.returning[0].id,
        user_id: session?.user.sub,
      },
    )

    const { insert_team_boards_one } = await gqlHasuraClient.request(
      CreateTeamBoardDocument,
      {
        team_id: insert_teams?.returning[0].id,
      },
    )

    if (!insert_team_boards_one) {
      throw new BadRequestError()
    }

    const { insert_team_board_details_one } = await gqlHasuraClient.request(
      CreateTeamBoardDetailsDocument,
      {
        team_board_id: insert_team_boards_one.id,
      },
    )

    insert_teams && cookies().set('current_team_id', insert_teams.returning[0].id)
    insert_teams && cookies().set('current_team_board_id', insert_team_boards_one.id)
    insert_teams &&
      cookies().set('current_team_board_detail_id', insert_team_board_details_one!.id)

    return { insert_teams, insert_team_member_one }
  } catch (error) {
    console.log('***************************')
    console.log(error)
    console.log('***************************')
    return handleServerError(error)
  }
}

export type ReturnCreateTeamType = Awaited<ReturnType<typeof createTeam>>
