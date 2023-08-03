import { Libraries } from '@/types/libraries'

import { handleNpmApiError } from '..'

export const getLibraries = async ({ query }: { query: string | null }) => {
  try {
    const res = await fetch(
      `https://registry.npmjs.org/-/v1/search?text=${query}+not:insecure+not:unstable+boost-exact:false&size=5&quality=0.0&maintenance=1.0&popularity=1.0`,
    )
    const data: Libraries = await res.json()
    return { data: data }
  } catch (error) {
    return handleNpmApiError(error)
  }
}
export type GetLibrariesType = Awaited<ReturnType<typeof getLibraries>>
