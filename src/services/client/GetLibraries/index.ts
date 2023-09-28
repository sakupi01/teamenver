import * as ApiGetLibraries from '@/api/get/libraries/route'

import { handleResolve, host } from '..'

export const path = host('/get/libraries')

export type WhichLibrary = 'css-framework' | 'ui-framework'
export const getLibraries = async (
  which: WhichLibrary,
): Promise<ApiGetLibraries.GetType> => {
  return fetch(`${path}?which=${which}`).then(handleResolve)
}
