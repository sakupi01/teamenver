import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/client'

import { CreateDetailsDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const createBoardDetail = async () => {
  const session = await getSession()
  const access_token = session?.accessToken
  const board_id = cookies().get('current_board_id')?.value
  console.log('***************************')
  console.log(
    'access_token',
    JSON.stringify({ accessToken: session?.accessToken }, null, 2),
  )
  console.log('***************************')
  try {
    if (board_id === undefined || null) {
      throw new BadRequestError()
    }
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    gqlHasuraClient.setHeader(`authorization`, `Bearer ${access_token}`)
    const { insert_board_details } = await gqlHasuraClient.request(
      CreateDetailsDocument,
      {
        board_id: board_id,
      },
    )
    console.log('***************************')
    console.log(insert_board_details)
    cookies().set('current_board_detail_id', insert_board_details?.returning[0].id)
    console.log(cookies().get('current_board_detail_id'))
    console.log('***************************')
    return { insert_board_details }
  } catch (error) {
    console.log('***************************')
    console.log(error)
    console.log('***************************')
    return handleServerError(error)
  }
}

export type ReturnCreateBoardDetailType = Awaited<ReturnType<typeof createBoardDetail>>
