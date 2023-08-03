export const host = (path: string) => `/api${path}`

export const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export const handleResolve = async (res: Response) => {
  if (!res.ok) {
    const status = res.status
    console.log(status)
    return
  }
  return await res.json()
}
