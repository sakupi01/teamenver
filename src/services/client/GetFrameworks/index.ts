import * as ApiGetFrameworks from '@/api/get/frameworks/route'

import { defaultHeaders, handleResolve, host } from '..'

export const path = host('/get/frameworks')

export const getFrameworks = async (): Promise<ApiGetFrameworks.GetType> => {
  return fetch(`${path}`, {
    headers: defaultHeaders,
  }).then(handleResolve)
}
