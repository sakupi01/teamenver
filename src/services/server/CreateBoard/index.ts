import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/client'

import { CreateBoardDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const createBoard = async () => {
  const session = await getSession()
  const access_token = session?.accessToken
  console.log(`***************************`)
  console.log(
    `access_token`,
    JSON.stringify({ accessToken: session?.accessToken }, null, 2),
  )
  console.log(`***************************`)
  try {
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    gqlHasuraClient.setHeader(`authorization`, `Bearer ${access_token}`)
    const { insert_boards } = await gqlHasuraClient.request(CreateBoardDocument, {
      is_public: false,
      team_id: cookies().get(`current_team_id`)?.value,
    })
    console.log(`***************************`)
    console.log(insert_boards)
    cookies().set(`current_board_id`, insert_boards?.returning[0].id)
    console.log(cookies().get(`current_board_id`))
    console.log(`***************************`)
    return { insert_boards }
  } catch (error) {
    console.log(`***************************`)
    console.log(error)
    console.log(`***************************`)
    return handleServerError(error)
  }
}

export type ReturnCreateBoardType = Awaited<ReturnType<typeof createBoard>>
