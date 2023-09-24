import * as ApiCheck from '@/api/check/route'

import { handleResolve, host } from '..'

export const path = host('/check')
export const checkDependency = async (
  libraries: Array<string>,
): Promise<ApiCheck.GetType> => {
  console.log(JSON.stringify(libraries));
  return fetch(`${path}?libraries=${libraries}`).then(handleResolve)
}
