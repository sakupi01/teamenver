import { NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { ErrorType } from '@/libs/error/http'

import { GetFrameworksType, getFrameworks } from '@/services/server/GetFrameworks'

export type GetType = GetFrameworksType

export async function GET(): Promise<NextResponse<GetType | ErrorType>> {
  try {
    const res = await getFrameworks()
    return NextResponse.json(res)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
