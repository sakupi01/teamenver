import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { ErrorType } from '@/libs/error/http'

import { insertMessage, ReturnInsertMessageType } from '@/services/server/InsertMessage'

export type GetType = ReturnInsertMessageType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType>> {
  try {
    const { searchParams } = new URL(request.url!)
    const content = searchParams.get('content')
    console.log('********')
    console.log('api', content)
    console.log('********')
    const res = await insertMessage(content)
    return NextResponse.json(res)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
