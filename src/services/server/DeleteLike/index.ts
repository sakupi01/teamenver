import { getSession } from '@auth0/nextjs-auth0'

import { UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { DeleteLikeDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const deleteLike = async (comment_id: string) => {
  const session = await getSession()
  const access_token = session?.accessToken

  try {
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { delete_likes } = await gqlHasuraClient.request(DeleteLikeDocument, {
      comment_id: comment_id,
      user_id: session?.user.sub,
    })

    return { delete_likes }
  } catch (error) {
    console.log('***************************')
    console.log(error)
    console.log('***************************')
    return handleServerError(error)
  }
}

export type ReturnDeleteLikeType = Awaited<ReturnType<typeof deleteLike>>
