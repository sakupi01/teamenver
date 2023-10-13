import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { UpdateDetailsDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const updateBoardDetail = async ({
  ...args
}: {
  framework?: string
  css_library?: string
  ui_library?: string
  linter?: string
  formatter?: string
  lint_staged_husky?: string
  hygen?: string
  builder?: string
  manager?: string
  vscode?: string
  volta?: string
  isGit?: string
}) => {
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
    return { update_board_details }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnUpdateBoardDetailType = Awaited<ReturnType<typeof updateBoardDetail>>
