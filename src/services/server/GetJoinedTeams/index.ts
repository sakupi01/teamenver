import { getSession } from '@auth0/nextjs-auth0'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetJoinedTeamsDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export type ReturnGetJoinedTeamsProps = {
  user_id: string
}

export const getJoinedTeams = async ({ user_id }: ReturnGetJoinedTeamsProps) => {
  const session = await getSession()
  const access_token = session?.accessToken

  try {
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    if (!user_id) {
      throw new BadRequestError()
    }

    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { teams } = await gqlHasuraClient.request(GetJoinedTeamsDocument, {
      user_id: user_id,
    })
    console.log('&&&&&&&&&&&&')
    console.log(teams)
    console.log('&&&&&&&&&&&&')

    return { teams }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnGetJoinedTeamsType = Awaited<ReturnType<typeof getJoinedTeams>>
