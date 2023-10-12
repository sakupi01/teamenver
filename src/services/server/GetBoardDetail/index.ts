import { getSession } from '@auth0/nextjs-auth0'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetBoardLibrariesDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const getBoardDetail = async (board_detail_id: string) => {
  const session = await getSession()
  const access_token = session?.accessToken

  try {
    if (board_detail_id === undefined || null) {
      throw new BadRequestError()
    }
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { board_details, boards } = await gqlHasuraClient.request(
      GetBoardLibrariesDocument,
      {
        board_detail_id: board_detail_id,
      },
    )

    return { board_details, boards }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnGetBoardDetailType = Awaited<ReturnType<typeof getBoardDetail>>
