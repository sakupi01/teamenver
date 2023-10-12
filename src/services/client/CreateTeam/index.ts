import { getSession } from '@auth0/nextjs-auth0'

import * as ApiGetTopics from '@/api/create/team/route'

import { defaultHeaders, handleResolve, host } from '..'

export const path = host('/create/team')
export const createTeam = async (name: string): Promise<ApiGetTopics.GetType> => {
  const session = await getSession()

  const headers = new Headers()
  headers.append('Authorization', `Bearer ${session?.accessToken}`)
  return fetch(`${path}?name=${name}`, { headers: defaultHeaders }).then(handleResolve)
}
