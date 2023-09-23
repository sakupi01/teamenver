import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { ErrorType } from '@/libs/error/http'

import { GetTopicsType, getTopics } from '@/services/server/GetTopics'

export type GetType = GetTopicsType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType | { message: string; status: number }>> {
  try {
    const { searchParams } = new URL(request.url!)
    const query = searchParams.get('query')
    const res = await getTopics({ query })
    return NextResponse.json(res)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
