import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { BadRequestError, ErrorType } from '@/libs/error/http'

import {
  ReturnGetMyBoardInTeamType,
  getMyBoardInTeam,
} from '@/services/server/GetMyBoardInTeam'

export type GetType = ReturnGetMyBoardInTeamType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType | { message: string; status: number }>> {
  // get team_id from query params
  const { searchParams } = new URL(request.url!)
  const team_id = searchParams.get('team_id')

  if (!team_id) {
    throw new BadRequestError()
  }

  try {
    const res = await getMyBoardInTeam(team_id)
    return NextResponse.json(res)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
