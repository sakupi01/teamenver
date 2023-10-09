import * as SendMessageApi from '@/api/send/message/route'

import { getAccessToken } from '@/libs/actions/getAccessToken'

import { defaultHeaders, handleResolve, host } from '..'

export const path = host('/send/message')
export const insertMessage = async (content: string): Promise<SendMessageApi.GetType> => {
  const access_token = await getAccessToken()
  const headers = new Headers()
  headers.append('Authorization', `Bearer ${access_token}`)
  const encoded_content = encodeURIComponent(content)
  return fetch(`${path}?content=${encoded_content}`, { headers: defaultHeaders }).then(
    handleResolve,
  )
}
