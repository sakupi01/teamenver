import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { InsertMessageDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const insertMessage = async (content: string | null) => {
  const current_board_id = cookies().get('current_board_id')?.value // safari で cookie が取得できない

  if (content == null || current_board_id === undefined) {
    return null
  }

  const session = await getSession()
  const access_token = session?.accessToken

  try {
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { insert_comments_one } = await gqlHasuraClient.request(InsertMessageDocument, {
      board_id: current_board_id,
      content: content,
    })

    return { insert_comments_one }
  } catch (error) {
    console.log('***************************')
    console.log(error)
    console.log('***************************')
    return handleServerError(error)
  }
}

export type ReturnInsertMessageType = Awaited<ReturnType<typeof insertMessage>>
