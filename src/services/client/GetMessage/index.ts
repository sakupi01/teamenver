import * as GetMessageApi from '@/api/get/message/route'

import { GetMessageProps } from '@/services/server/GetMessage'

import { defaultHeaders, handleResolve, host } from '..'

export const path = host('/get/message')
export const getMessage = async ({
  board_id,
  from_ts,
}: GetMessageProps): Promise<GetMessageApi.GetType> => {
  const from_ts_for_param = encodeURIComponent(from_ts)
  return fetch(`${path}?board_id=${board_id}&from_ts=${from_ts_for_param}`, {
    headers: defaultHeaders,
  }).then(handleResolve)
}
