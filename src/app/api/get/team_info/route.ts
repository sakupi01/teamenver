import { NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { ErrorType } from '@/libs/error/http'

import { getTeamInfo, ReturnGetTeamInfoType } from '@/services/server/GetTeamInfo'

export type GetType = ReturnGetTeamInfoType

export async function GET(): Promise<
  NextResponse<GetType | ErrorType | { message: string; status: number }>
> {
  try {
    const res = await getTeamInfo()
    return NextResponse.json(res)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
