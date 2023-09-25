import * as ApiGetFrameworks from '@/api/get/frameworks/route'

import { defaultHeaders, handleResolve, host } from '..'

export const path = host('/get/frameworks')

export const getNpmLibraries = async (
  query: string | null,
): Promise<ApiGetFrameworks.GetType> => {
  return fetch(`${path}?query=${query}`, {
    headers: defaultHeaders,
  }).then(handleResolve)
}
