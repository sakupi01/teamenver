import * as GetApproversApi from '@/api/get/approvers/route'

import { defaultHeaders, handleResolve, host } from '..'

export const path = host('/get/approvers')
export const getApprovers = async (): Promise<GetApproversApi.GetType> => {
  return fetch(`${path}`, {
    headers: defaultHeaders,
  }).then(handleResolve)
}
