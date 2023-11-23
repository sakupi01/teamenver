'use server'
import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { UpdateAgreementDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const updateAgreement = async (isAgreed: boolean) => {
  const session = await getSession()
  const access_token = session?.accessToken
  const current_team_board_id = cookies().get('current_team_board_id')?.value

  try {
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    if (current_team_board_id === undefined) {
      throw new BadRequestError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { update_agreements } = await gqlHasuraClient.request(UpdateAgreementDocument, {
      team_board_id: current_team_board_id,
      is_agreed: isAgreed,
    })

    return { update_agreements }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnUpdateAgreementType = Awaited<ReturnType<typeof updateAgreement>>
