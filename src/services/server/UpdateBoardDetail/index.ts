import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { Database } from '@/types/supabase'

import { UpdateDetailsDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const updateBoardDetail = async ({
  ...args
}: Omit<
  Database['public']['Tables']['board_details']['Update'],
  'id' | 'board_id' | 'created_at' | 'updated_at'
>) => {
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
    const { update_board_details } = await gqlHasuraClient.request(
      UpdateDetailsDocument,
      {
        id: board_detail_id,
        changes: { ...args },
      },
    )
    console.log('here: ', update_board_details)
    return { update_board_details }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnUpdateBoardDetailType = Awaited<ReturnType<typeof updateBoardDetail>>
