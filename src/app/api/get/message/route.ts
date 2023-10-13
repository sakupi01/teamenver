import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { BadRequestError, ErrorType } from '@/libs/error/http'

import { getMessage } from '@/services/server/GetMessage'
import { ReturnGetMessageType } from '@/services/server/GetMessage'

export type GetType = ReturnGetMessageType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType | { message: string; status: number }>> {
  try {
    const { searchParams } = new URL(request.url!)
    const board_id = searchParams.get('board_id')
    const from_ts = searchParams.get('from_ts')
    if (board_id === null || from_ts === null) {
      throw new BadRequestError()
    }

    const res = await getMessage({ board_id, from_ts })
    return NextResponse.json(res)
  } catch (error) {
    console.log(error)
    return handleApiRouteError(error)
  }
}
