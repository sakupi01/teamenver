import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { UpdateTeamBoardDetailsDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const updateTeamBoardDetail = async ({
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
  const team_board_detail_id = cookies().get('current_team_board_detail_id')?.value

  console.log('*********************')
  console.log(args)
  console.log('*********************')

  try {
    if (team_board_detail_id === undefined || null) {
      throw new BadRequestError()
    }
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)
    const { update_team_board_details } = await gqlHasuraClient.request(
      UpdateTeamBoardDetailsDocument,
      {
        id: team_board_detail_id,
        changes: { ...args },
      },
    )

    return { update_team_board_details }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnUpdateTeamBoardDetailType = Awaited<
  ReturnType<typeof updateTeamBoardDetail>
>
