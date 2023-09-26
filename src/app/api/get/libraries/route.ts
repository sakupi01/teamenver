import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { ErrorType } from '@/libs/error/http'

import { WhichLibrary } from '@/services/client/GetLibraries'
import {
  getCheckedLibraries,
  ReturnGetCheckedLibrariesType,
} from '@/services/server/GetCheckedLibraries'

export type GetType = ReturnGetCheckedLibrariesType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType>> {
  try {
    const { searchParams } = new URL(request.url!)
    const which = searchParams.get('which') as WhichLibrary
    const resOfChecked = await getCheckedLibraries(which)
    return NextResponse.json(resOfChecked)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
