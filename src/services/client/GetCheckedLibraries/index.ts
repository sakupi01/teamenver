import * as ApiCheck from '@/api/check/route'

import { handleResolve, host } from '..'

export const path = host('/check')

export type WhichLibrary = 'css-framework' | 'ui-framework'
export const getCheckedLibraries = async (
  which: WhichLibrary,
): Promise<ApiCheck.GetType> => {
  return fetch(`${path}?which=${which}`).then(handleResolve)
}
