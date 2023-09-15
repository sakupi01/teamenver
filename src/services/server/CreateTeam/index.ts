import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'

import { BadRequestError, UnAuthorizedError } from '@/libs/error/http'
import { gqlHasuraClient } from '@/libs/graphql/client'

import { CreateTeamDocument } from '@/gql/codegen/hasura/graphql'

import { handleServerError } from '..'

export const createTeam = async ({ name }: { name: string | null }) => {
  const session = await getSession()
  const access_token = session?.accessToken
  console.log('***************************')
  console.log(
    'access_token',
    JSON.stringify({ accessToken: session?.accessToken }, null, 2),
  )
  console.log('***************************')
  try {
    if (name === null) {
      throw new BadRequestError()
    }
    if (access_token === undefined) {
      throw new UnAuthorizedError()
    }
    gqlHasuraClient.setHeader(`authorization`, `Bearer ${access_token}`)
    const { insert_teams } = await gqlHasuraClient.request(CreateTeamDocument, {
      name: name,
    })
    cookies().set('current_team_id', insert_teams?.returning[0].id)
    console.log('***************************')
    console.log(insert_teams)
    console.log('***************************')
    return { insert_teams }
  } catch (error) {
    console.log('***************************')
    console.log(error)
    console.log('***************************')
    return handleServerError(error)
  }
}

export type ReturnCreateTeamType = Awaited<ReturnType<typeof createTeam>>
