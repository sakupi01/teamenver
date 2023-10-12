import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from 'next/navigation'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetTeamBoardDetailDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

interface DataObject {
  [key: string]: string
}
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
    const { __typename, id, ...teamBoardDetailWithoutTypename } = teams_by_pk.team_boards
      .team_board_detail as DataObject

    // 最後のnullでないキーを保持　// 全て埋まっていればundefined
    const prevFirstNullKey = Object.keys(
      teamBoardDetailWithoutTypename as DataObject,
    ).reduce((prevKey: string | null, key) => {
      if (teamBoardDetailWithoutTypename[key] !== null) {
        return key
      }
      return prevKey
    }, null)

    return { id, prevFirstNullKey, teamBoardDetailWithoutTypename }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnGetTeamBoardDetailType = Awaited<ReturnType<typeof getTeamBoardDetail>>
