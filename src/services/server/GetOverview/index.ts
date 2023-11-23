import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/clientLegacy'

import { GetProjectOverviewDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const getProjectOverview = async () => {
  const session = await getSession()
  const access_token = session?.accessToken
  const team_id = cookies().get('current_team_id')?.value

  try {
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }

    if (team_id === undefined) {
      throw new BadRequestError()
    }
    gqlHasuraClient.setHeader('authorization', `Bearer ${access_token}`)

    const { project_details } = await gqlHasuraClient.request(
      GetProjectOverviewDocument,
      {
        team_id: team_id,
      },
    )

    return { project_details }
  } catch (error) {
    return handleServerError(error)
  }
}

export type ReturnProjectOverviewType = Awaited<ReturnType<typeof getProjectOverview>>
