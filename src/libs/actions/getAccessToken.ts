'use server'
import { getSession } from '@auth0/nextjs-auth0'

export const getAccessToken = async () => {
  'use server'
  const session = await getSession()
  const access_token = session?.accessToken
  return access_token
}
