import { rest } from 'msw'

import { path } from '..'

import { getNpmLibrariesData } from './fixture'

export function handleGetNpmLibraries(args?: {
  mock?: jest.Mock<any, any>
  status?: number
  query: string
}) {
  return rest.get(`${path}?query=${args?.query}`, async (_, res, ctx) => {
    args?.mock?.()
    if (args?.status) {
      return res(ctx.status(args.status))
    }
    return res(ctx.status(200), ctx.json(getNpmLibrariesData))
  })
}
