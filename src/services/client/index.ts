export const host = (path: string) => `/api${path}`

export const defaultHeaders = {
  'Content-Type': `application/json`,
  Accept: `application/json`,
}

export const handleResolve = async (res: Response) => {
  if (!res.ok) {
    console.log(`Hit to the error`, res)
    return
  }
  return await res.json()
}
