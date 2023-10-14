import { ErrorStatus, HttpError } from '@/libs/error/http'

export const host = (path: string) => `/api${path}`

export const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export const handleResolve = async (res: Response) => {
  if (!res.ok) {
    console.log('***************************')
    console.log(res)
    console.log('***************************')

    const status = res.status as ErrorStatus
    throw new HttpError(status)
  }
  return await res.json()
}
