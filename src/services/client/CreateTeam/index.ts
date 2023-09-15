import * as ApiGetTopics from '@/api/create/team/route'

import { defaultHeaders, handleResolve, host } from '..'

export const path = host('/create/team')
export const createTeam = async (name: string): Promise<ApiGetTopics.GetType> => {
  return fetch(`${path}?name=${name}`, { headers: defaultHeaders }).then(handleResolve)
}
