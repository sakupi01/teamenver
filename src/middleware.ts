// to check if the user is authorized in all the pages.
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge'
import { NextRequest, NextResponse } from 'next/server'

export default withMiddlewareAuthRequired(async function middleware(
  request: NextRequest,
) {
  const appSession = request.cookies.has('appSession')

  if (!appSession) {
    if (request.nextUrl.pathname.startsWith('/')) {
      return NextResponse.rewrite(new URL('/api/auth/login', request.url))
    }
  } else {
    return NextResponse.rewrite(new URL('/select/team', request.url))
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
