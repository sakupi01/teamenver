import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from 'next/navigation'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetTeamBoardDetailDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'
import { DataObject, findKeyBeforeNullValue } from '../helpers/findFirstNullKeyIndicator'

export const getTeamBoardDetail = async (team_id: string) => {
  const session = await getSession()
  const access_token = session?.accessToken

  try {
    if (team_id === undefined || null) {
      throw new BadRequestError()
    }
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { teams_by_pk } = await gqlHasuraClient.request(GetTeamBoardDetailDocument, {
      team_id: team_id,
    })

    if (
      !teams_by_pk ||
      !teams_by_pk.team_boards ||
      !teams_by_pk.team_boards.team_board_detail
    ) {
      redirect('/select/team')
    }

    // typenameを除外
    const {
      __typename,
      id,
      created_at,
      updated_at,
      admin_id,
      ...teamBoardDetailWithoutTypename
    } = teams_by_pk.team_boards.team_board_detail as DataObject

    const prevFirstNullKey = findKeyBeforeNullValue(teamBoardDetailWithoutTypename)
    const isAdmin = admin_id === session?.user.sub

    return { id, prevFirstNullKey, teamBoardDetailWithoutTypename, isAdmin }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnGetTeamBoardDetailType = Awaited<ReturnType<typeof getTeamBoardDetail>>
