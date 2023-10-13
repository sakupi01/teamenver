import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { CreateBoardDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const createBoard = async () => {
  const session = await getSession()
  const access_token = session?.accessToken
  if (!access_token) {
    throw new UnAuthorizedError()
  }
  const current_team_id = cookies().get('current_team_id')?.value
  if (!current_team_id) {
    throw new BadRequestError()
  }

  try {
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { insert_boards } = await gqlHasuraClient.request(CreateBoardDocument, {
      is_public: false,
      team_id: current_team_id,
    })
    insert_boards && cookies().set('current_board_id', insert_boards?.returning[0].id)
    return { insert_boards }
  } catch (error) {
    console.log('***************************')
    console.log(error)
    console.log('***************************')
    return handleServerError(error)
  }
}

export type ReturnCreateBoardType = Awaited<ReturnType<typeof createBoard>>
