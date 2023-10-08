import { getSession } from '@auth0/nextjs-auth0'

import { UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetUserInfoDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const getUserInfo = async () => {
  const session = await getSession()
  const access_token = session?.accessToken
  try {
    if (!access_token) {
      throw new UnAuthorizedError()
    }

    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)

    const { users_by_pk } = await gqlHasuraClient.request(GetUserInfoDocument, {
      id: session?.user.sub,
    })

    return { users_by_pk }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnGetUserInfoType = Awaited<ReturnType<typeof getUserInfo>>
