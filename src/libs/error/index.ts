import { NextResponse } from 'next/server'

import { errors, ErrorType, HttpError } from './http'

export function handleApiRouteError(err: unknown): NextResponse<ErrorType> {
  if (err instanceof HttpError) {
    const { status, message } = err.jsonify()
    return NextResponse.json({ message: message, status: status }, { status: status })
  }
  const status = 500
  const { message } = errors[status]
  return NextResponse.json({ message: message, status: status }, { status: status })
}
