import { rest } from 'msw'

import { mockGetFrameworksResponse } from './fixture'

export function handleGetFrameworks() {
  return rest.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/frameworks`,
    async (req, res, ctx) => {
      return res(ctx.json(mockGetFrameworksResponse))
    },
  )
}

export const handlers = [handleGetFrameworks()]
