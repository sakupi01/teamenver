import { rest } from 'msw'

import { mockGetProjectOverviewResponse } from './fixture'

export function handleGetProjectOverview() {
  return rest.get('/api/get/overview', async (req, res, ctx) => {
    return res(ctx.json(mockGetProjectOverviewResponse))
  })
}
