import { ClientError } from 'graphql-request'
import { NextResponse } from 'next/server'

import { errors, ErrorType, HttpError } from './http'

export function handleApiRouteError(err: unknown): NextResponse<ErrorType> {
  if (err instanceof HttpError) {
    const { status, message } = err.jsonifyError()
    return NextResponse.json({ message: message, status: status }, { status: status })
  }
  if (err instanceof ClientError) {
    switch (err.response.status) {
      case 400:
        return NextResponse.json({ message: err.message, status: 400 }, { status: 400 })
        break
      case 401:
        return NextResponse.json({ message: err.message, status: 401 }, { status: 401 })
        break
      case 404:
        return NextResponse.json({ message: err.message, status: 404 }, { status: 404 })
        break
      case 405:
        return NextResponse.json({ message: err.message, status: 405 }, { status: 405 })
        break
      case 500:
        return NextResponse.json({ message: err.message, status: 500 }, { status: 500 })
        break
      default:
        break
    }
  }
  const status = 500
  const { message } = errors[status]
  return NextResponse.json({ message: message, status: status }, { status: status })
}
