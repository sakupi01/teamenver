import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { BadRequestError, ErrorType } from '@/libs/error/http'

import { WhichLibrary } from '@/services/client/GetCheckedLibraries'
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
    const board_detail_id = searchParams.get('board_detail_id')
    const isTeamBoard = searchParams.get('isTeamBoard')
    if (!board_detail_id || isTeamBoard == null) {
      throw new BadRequestError()
    }

    const res = await getCheckedLibraries(which, board_detail_id, Boolean(isTeamBoard))
    return NextResponse.json(res)
  } catch (error) {
    console.log(error)

    return handleApiRouteError(error)
  }
}
