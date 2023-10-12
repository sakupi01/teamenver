import { getSession } from '@auth0/nextjs-auth0'

import { UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetLastMessagesDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export type GetMessageProps = {
  board_id: string
  from_ts: string
}

export const getMessage = async ({ board_id, from_ts }: GetMessageProps) => {
  const session = await getSession()
  const access_token = session?.accessToken

  try {
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)

    const { comments } = await gqlHasuraClient.request(GetLastMessagesDocument, {
      user_id: session?.user.sub,
      board_id: board_id,
      from_ts: from_ts,
    })

    return { comments }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnGetMessageType = Awaited<ReturnType<typeof getMessage>>
