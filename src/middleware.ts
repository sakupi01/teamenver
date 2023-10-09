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
  console.log(current_team_id, current_board_id)

  if (!appSession) {
    if (request.nextUrl.pathname.startsWith('/')) {
      return NextResponse.rewrite(new URL('/api/auth/login', request.url))
    }
  } else if (current_board_id) {
    // board_idがあるならteam_idもあるという前提
    return NextResponse.rewrite(
      `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/team/${current_team_id}/board/${current_board_id}`,
    )
  } else if (current_team_id) {
    if (request.nextUrl.pathname.includes('people')) {
      return NextResponse.rewrite(
        `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/team/${current_team_id}/people`,
      )
    }
    if (request.nextUrl.pathname.includes('account')) {
      return NextResponse.rewrite(`${process.env.NEXT_PUBLIC_BASE_URL}/account`)
    }
    return NextResponse.rewrite(
      `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/team/${current_team_id}`,
    )
  }
  return NextResponse.rewrite(`${process.env.NEXT_PUBLIC_BASE_URL}/select/team`)
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
