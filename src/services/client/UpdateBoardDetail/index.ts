import * as ApiGetTopics from '@/api/edit/board/route'

import { defaultHeaders, handleResolve, host } from '..'

export const path = host('/edit/board')
export const updateBoardDetail = async (
  category: string | undefined,
  label: string | null,
): Promise<ApiGetTopics.GetType> => {
  return fetch(`${path}?category=${category}&label=${label}`, {
    headers: defaultHeaders,
  }).then(handleResolve)
}
