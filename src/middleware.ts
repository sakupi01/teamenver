// to check if the user is authorized in all the pages.
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export default withMiddlewareAuthRequired(async function middleware(
  request: NextRequest,
) {
  const appSession = request.cookies.has('appSession')
  const current_team_id = request.cookies.get('current_team_id')?.value
  const current_board_id = request.cookies.get('current_board_id')?.value

  if (!appSession) {
    if (request.nextUrl.pathname.startsWith('/')) {
      return NextResponse.redirect(new URL('/api/auth/login', request.url))
    }
  } else if (!current_team_id) {
    return NextResponse.redirect(new URL('/select/team', request.url))
  }
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|static|favicon.ico).*)',
  ],
}
