import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetBoardLibrariesDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const getBoardDetail = async () => {
  const session = await getSession()
  const access_token = session?.accessToken
  const board_detail_id = cookies().get('current_board_detail_id')?.value

  try {
    if (board_detail_id === undefined || null) {
      throw new BadRequestError()
    }
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { board_details } = await gqlHasuraClient.request(GetBoardLibrariesDocument)

    return { board_details }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnUpdateBoardDetailType = Awaited<ReturnType<typeof getBoardDetail>>
