import * as ApiGetTopics from '@/api/edit/board/route'

import { defaultHeaders, handleResolve, host } from '..'

export const path = host('/edit/board')
export const updateBoardDetail = async (
  category: string | undefined,
  label: string | null,
  isTeamBoard: boolean,
): Promise<ApiGetTopics.GetType> => {
  return fetch(`${path}?category=${category}&label=${label}&isTeamBoard=${isTeamBoard}`, {
    headers: defaultHeaders,
  }).then(handleResolve)
}
