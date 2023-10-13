import { rest } from 'msw'

import { mockGetFrameworksResponse } from './fixture'

export function handleGetFrameworks(spy?: jest.Mock<any, any>) {
  return rest.post('/rest/v1/frameworks', async (req, res, ctx) => {
    spy?.({ headers: req.headers.get('content-type') })
    return res(ctx.json(mockGetFrameworksResponse))
  })
}

export const handlers = [handleGetFrameworks()]
