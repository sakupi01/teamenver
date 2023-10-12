import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from 'next/navigation'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetBoardLibrariesDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

interface DataObject {
  [key: string]: string
}

export const getBoardDetail = async (board_id: string) => {
  const session = await getSession()
  const access_token = session?.accessToken

  try {
    if (board_id === undefined || null) {
      throw new BadRequestError()
    }
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { boards_by_pk } = await gqlHasuraClient.request(GetBoardLibrariesDocument, {
      board_id: board_id,
    })

    if (!boards_by_pk) {
      redirect('/select/team')
    }

    // typenameを除外
    const { __typename, id, ...boardDetailWithoutTypename } =
      boards_by_pk.board_detail == null
        ? ({} as DataObject)
        : (boards_by_pk.board_detail as DataObject)

    // 最後のnullでないキーを保持　// 全て埋まっていればundefined
    const prevFirstNullKey = Object.keys(boardDetailWithoutTypename as DataObject).reduce(
      (prevKey: string | null, key) => {
        if (boardDetailWithoutTypename[key] !== null) {
          return key
        }
        return prevKey
      },
      null,
    )

    const isPublic = boards_by_pk.is_public

    return { prevFirstNullKey, boardDetailWithoutTypename, isPublic }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnGetBoardDetailType = Awaited<ReturnType<typeof getBoardDetail>>
