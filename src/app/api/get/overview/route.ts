import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { ErrorType } from '@/libs/error/http'

import {
  ReturnProjectOverviewType,
  getProjectOverview,
} from '@/services/server/GetOverview'

export type GetType = ReturnProjectOverviewType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType | { message: string; status: number }>> {
  try {
    const res = await getProjectOverview()

    return NextResponse.json(res)
  } catch (error) {
    console.log(error)
    return handleApiRouteError(error)
  }
}
