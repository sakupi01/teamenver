'use server'
import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { UpdateBoardVisibilityDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const updateBoardVisibility = async (is_public: boolean) => {
  const session = await getSession()
  const access_token = session?.accessToken
  const current_board_id = cookies().get('current_board_id')?.value

  try {
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    if (current_board_id === undefined) {
      throw new BadRequestError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { update_boards_by_pk } = await gqlHasuraClient.request(
      UpdateBoardVisibilityDocument,
      {
        board_id: current_board_id,
        is_public: is_public,
      },
    )

    return { update_boards_by_pk }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnUpdateBoardVisibilityType = Awaited<
  ReturnType<typeof updateBoardVisibility>
>
