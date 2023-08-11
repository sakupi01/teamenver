import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { ErrorType } from '@/libs/error/http'

import { ReturnCreateTeamType, createTeam } from '@/services/server/CreateTeam'

export type GetType = ReturnCreateTeamType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType>> {
  try {
    const { searchParams } = new URL(request.url!)
    const name = searchParams.get('name')
    const res = await createTeam({ name })
    return NextResponse.json(res)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
