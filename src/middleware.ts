// to check if the user is authorized in all the pages.
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge'
import { NextRequest, NextResponse } from 'next/server'

export default withMiddlewareAuthRequired(async function middleware(
  request: NextRequest,
) {
  const appSession = request.cookies.has('appSession')
  const is_team_id = request.cookies.has('current_team_id')
  const is_board_id = request.cookies.has('current_board_id')

  if (!is_team_id) {
    return NextResponse.rewrite(new URL('/select/team', request.url))
  } else if (!is_board_id) {
    const current_team_id = request.cookies.get('current_team_id')?.value
    if (request.nextUrl.pathname.startsWith('/dashboard/team')) {
      return NextResponse.rewrite(
        new URL(`/dashboard/team/${current_team_id}`, request.url),
      )
    }
    if (request.nextUrl.pathname.startsWith('/')) {
      return NextResponse.rewrite(new URL('/profile', request.url))
    }
  } else {
    const current_team_id = request.cookies.get('current_team_id')?.value
    const current_board_id = request.cookies.get('current_board_id')?.value

    // bring this condition to the last as all destination will start with `/`
    // URLのネスト深い順
    if (request.nextUrl.pathname.startsWith('/result')) {
      return NextResponse.rewrite(new URL('/result', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/select/team')) {
      return NextResponse.rewrite(new URL('/select/team', request.url))
    }

    if (request.nextUrl.pathname.includes('/select/board')) {
      return NextResponse.rewrite(new URL('/select/board', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard/team/board')) {
      return NextResponse.rewrite(
        new URL(
          `/dashboard/team/${current_team_id}/board/${current_board_id}`,
          request.url,
        ),
      )
    }
    if (request.nextUrl.pathname.startsWith('/dashboard/team')) {
      return NextResponse.rewrite(
        new URL(`/dashboard/team/${current_team_id}`, request.url),
      )
    }
    if (request.nextUrl.pathname.startsWith('/')) {
      return NextResponse.rewrite(new URL('/profile', request.url))
    }
  }

  if (appSession) {
    if (request.nextUrl.pathname.startsWith('/')) {
      return NextResponse.rewrite(new URL('/profile', request.url))
    }
  } else {
    if (request.nextUrl.pathname.startsWith('/')) {
      return NextResponse.rewrite(new URL('/api/auth/login', request.url))
    }
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
