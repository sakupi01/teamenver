import { getSession } from '@auth0/nextjs-auth0'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import {
  InsertAgreementDocument,
  InsertTeamMemberDocument,
} from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const insertTeamMember = async (team_id: string | null) => {
  if (team_id == null) {
    throw new BadRequestError()
  }

  const session = await getSession()
  const access_token = session?.accessToken

  try {
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { insert_team_member_one } = await gqlHasuraClient.request(
      InsertTeamMemberDocument,
      {
        team_id: team_id,
        user_id: session?.user.sub,
      },
    )

    if (!insert_team_member_one || !insert_team_member_one.teams.team_boards) {
      throw new BadRequestError()
    }

    const { insert_agreements_one } = await gqlHasuraClient.request(
      InsertAgreementDocument,
      {
        team_board_id: insert_team_member_one.teams.team_boards.id,
      },
    )

    return { insert_team_member_one }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnInsertMessageType = Awaited<ReturnType<typeof insertTeamMember>>
