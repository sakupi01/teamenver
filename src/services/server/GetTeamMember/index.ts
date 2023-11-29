import { getSession } from '@auth0/nextjs-auth0'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetTeamMemberDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const getTeamMember = async (current_team_id: string | undefined) => {
  const session = await getSession()
  const access_token = session?.accessToken
  try {
    if (!access_token) {
      throw new UnAuthorizedError()
    }
    if (!current_team_id) {
      throw new BadRequestError()
    }
    console.log('*********')
    console.error('access_token', JSON.stringify(access_token))
    console.error('current_team_id', JSON.stringify(current_team_id))
    console.log('*********')
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { team_member } = await gqlHasuraClient.request(GetTeamMemberDocument, {
      team_id: current_team_id,
    })
    console.log('*********')
    console.error('get team_member', JSON.stringify(team_member, null, 2))
    console.log('*********')

    return { team_member }
  } catch (error) {
    console.log('*********')
    console.error('get team_member', JSON.stringify(error, null, 2))
    console.log('*********')
    return handleServerError(error)
  }
}

export type ReturnGetTeamMemberType = Awaited<ReturnType<typeof getTeamMember>>
