import { rest } from 'msw'

import { mockGetFrameworksResponse } from './fixture'

export function handleGetFrameworks() {
  return rest.get('/api/get/frameworks', async (req, res, ctx) => {
    return res(ctx.json(mockGetFrameworksResponse))
  })
}

export const handlers = [handleGetFrameworks()]
