import { getSession } from '@auth0/nextjs-auth0'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { InsertTeamMemberDocument } from '@/gql/codegen/hasura/graphql'

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

    return { insert_team_member_one }
  } catch (error) {
    console.log('***************************')
    console.log(error)
    console.log('***************************')
    return handleServerError(error)
  }
}

export type ReturnInsertMessageType = Awaited<ReturnType<typeof insertTeamMember>>
