import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { BadRequestError, ErrorType } from '@/libs/error/http'

import { insertMessage, ReturnInsertMessageType } from '@/services/server/InsertMessage'

export type GetType = ReturnInsertMessageType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType>> {
  try {
    const { searchParams } = new URL(request.url!)
    const content = searchParams.get('content')
    const current_board_id = searchParams.get('current_board_id')
    if (!current_board_id) {
      throw new BadRequestError()
    }
    const res = await insertMessage(content, current_board_id)
    return NextResponse.json(res)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
