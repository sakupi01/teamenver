import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetAgreementsDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'
export const getApprovers = async () => {
  const session = await getSession()
  const access_token = session?.accessToken
  const current_team_board_id = cookies().get('current_team_board_id')?.value
  try {
    if (access_token === undefined || current_team_board_id === undefined) {
      throw new UnAuthorizedError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)

    const { agreements } = await gqlHasuraClient.request(GetAgreementsDocument, {
      team_board_id: current_team_board_id,
    })
    return { agreements }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnGetApproversType = Awaited<ReturnType<typeof getApprovers>>
