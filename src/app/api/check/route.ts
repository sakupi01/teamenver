import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { ErrorType } from '@/libs/error/http'

import { checkDependency } from '@/services/server/CheckDependency'
import { ReturnCheckDependencyType } from '@/services/server/CheckDependency'

export type GetType = ReturnCheckDependencyType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType>> {
  try {
    const { searchParams } = new URL(request.url!)
    const libraries: string = searchParams.get('libraries') || '[]'
    
    const res = await checkDependency(libraries)
    return NextResponse.json(res)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
