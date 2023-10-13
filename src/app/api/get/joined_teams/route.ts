import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { BadRequestError, ErrorType } from '@/libs/error/http'

import {
  ReturnGetJoinedTeamsType,
  getJoinedTeams,
} from '@/services/server/GetJoinedTeams'

export type GetType = ReturnGetJoinedTeamsType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType | { message: string; status: number }>> {
  try {
    const { searchParams } = new URL(request.url!)
    const user_id = searchParams.get('user_id')
    if (!user_id) {
      throw new BadRequestError()
    }

    const res = await getJoinedTeams({ user_id })
    return NextResponse.json(res)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
