// to check if the user is authorized in all the pages.
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge'
import { NextRequest, NextResponse } from 'next/server'

export default withMiddlewareAuthRequired(async function middleware(
  request: NextRequest,
) {
  const appSession = request.cookies.has('appSession')
  const current_team_id = request.cookies.get('current_team_id')?.value
  const current_board_id = request.cookies.get('current_board_id')?.value

  if (!appSession) {
    if (request.nextUrl.pathname.startsWith('/')) {
      return NextResponse.rewrite(new URL('/api/auth/login', request.url))
    }
  } else if (!current_team_id) {
    return NextResponse.rewrite(new URL('/select/team', request.url))
  } else if (!current_board_id) {
    return NextResponse.rewrite(
      new URL(`/select/team/${current_team_id}/board`, request.url),
    )
  } else {
    if (
      request.nextUrl.pathname.startsWith('/select') &&
      request.nextUrl.pathname.includes('board')
    ) {
      return NextResponse.rewrite(
        new URL(
          `/dashboard/team/${current_team_id}/board/${current_board_id}`,
          request.url,
        ),
      )
    }
  }

  console.log(request.url)

  return NextResponse.rewrite(new URL(request.url, process.env.NEXT_PUBLIC_BASE_URL))
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
