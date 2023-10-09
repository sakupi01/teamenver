import { getSession } from '@auth0/nextjs-auth0'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetTeamInfoDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const getTeamInfo = async (current_team_id: string | undefined) => {
  const session = await getSession()
  const access_token = session?.accessToken
  try {
    if (!access_token) {
      throw new UnAuthorizedError()
    }
    if (!current_team_id) {
      throw new BadRequestError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)

    const { teams_by_pk } = await gqlHasuraClient.request(GetTeamInfoDocument, {
      id: current_team_id,
      user_id: session?.user.sub,
    })

    return { teams_by_pk }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnGetTeamInfoType = Awaited<ReturnType<typeof getTeamInfo>>
