import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { ErrorType } from '@/libs/error/http'

import { ReturnGetApproversType } from '@/services/server/GetApprovers'
import { getApprovers } from '@/services/server/GetApprovers'

export type GetType = ReturnGetApproversType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType | { message: string; status: number }>> {
  try {
    const res = await getApprovers()
    return NextResponse.json(res)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
