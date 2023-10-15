import * as ApiGetTopics from '@/api/edit/board/route'

import { defaultHeaders, handleResolve, host } from '..'

export const path = host('/delete/board_item')
export const deleteBoardDetail = async (
  category: string | undefined,
  isTeamBoard: boolean,
): Promise<ApiGetTopics.GetType> => {
  return fetch(`${path}?category=${category}&isTeamBoard=${isTeamBoard}`, {
    headers: defaultHeaders,
  }).then(handleResolve)
}
