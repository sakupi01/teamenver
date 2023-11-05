'use server'
import { getSession } from '@auth0/nextjs-auth0'
import { Value } from '@udecode/plate-common'
import { cookies } from 'next/headers'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { UpdateProjectOverviewDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const updateProjectOverview = async (content: Value) => {
  const session = await getSession()
  const access_token = session?.accessToken
  const current_team_id = cookies().get('current_team_id')?.value

  try {
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    if (current_team_id === undefined) {
      throw new BadRequestError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)

    const { update_project_details } = await gqlHasuraClient.request(
      UpdateProjectOverviewDocument,
      {
        team_id: current_team_id,
        content: JSON.stringify(content),
      },
    )

    return { update_project_details }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnUpdateProjectOverviewType = Awaited<
  ReturnType<typeof updateProjectOverview>
>
