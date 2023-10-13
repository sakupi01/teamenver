import { ClientError } from 'graphql-request'
import { NextResponse } from 'next/server'

import { deleteCookies } from '../actions/deleteCookies'

import { CustomError } from './custom'
import { errors, ErrorType, HttpError } from './http'

export function handleApiRouteError(err: unknown): NextResponse<ErrorType> {
  if (err instanceof HttpError) {
    const { status, message } = err.jsonifyError()
    switch (status) {
      case 400:
        return NextResponse.json({ message: err.message, status: 400 }, { status: 400 })
      case 401:
        deleteCookies()
        NextResponse.redirect(
          new URL('/api/auth/logout', process.env.NEXT_PUBLIC_BASE_URL),
        )
      case 404:
        return NextResponse.json({ message: err.message, status: 404 }, { status: 404 })
      case 405:
        return NextResponse.json({ message: err.message, status: 405 }, { status: 405 })
      case 500:
        return NextResponse.json({ message: err.message, status: 500 }, { status: 500 })
      default:
        break
    }
  }
  if (err instanceof ClientError) {
    switch (err.response.status) {
      case 400:
        return NextResponse.json({ message: err.message, status: 400 }, { status: 400 })
      case 401:
        deleteCookies()
        NextResponse.redirect(
          new URL('/api/auth/logout', process.env.NEXT_PUBLIC_BASE_URL),
        )
      case 404:
        return NextResponse.json({ message: err.message, status: 404 }, { status: 404 })
      case 405:
        return NextResponse.json({ message: err.message, status: 405 }, { status: 405 })
      case 500:
        return NextResponse.json({ message: err.message, status: 500 }, { status: 500 })
      default:
        break
    }
  }
  if (err instanceof CustomError) {
    return NextResponse.json(
      { message: err.message, status: err.status },
      { status: err.status },
    )
  }
  const status = 500
  const { message } = errors[status]
  return NextResponse.json({ message: message, status: status }, { status: status })
}
