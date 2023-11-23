import { rest } from 'msw'

import { mockGetApproversResponse } from './fixture'

export function handleGetApprovers() {
  return rest.get('/api/get/approvers', async (req, res, ctx) => {
    return res(ctx.json(mockGetApproversResponse))
  })
}
