import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { ErrorType } from '@/libs/error/http'

import { GetLibrariesType, getLibraries } from '@/services/server/GetLibraries'

export type GetType = GetLibrariesType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType>> {
  try {
    const { searchParams } = new URL(request.url!)
    const query = searchParams.get('query')
    const res = await getLibraries({ query })
    return NextResponse.json(res)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
