import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { BadRequestError, ErrorType } from '@/libs/error/http'

import { ReturnDeleteLikeType, deleteLike } from '@/services/server/DeleteLike'
import { ReturnInsertLikeType, insertLike } from '@/services/server/InsertLike'

export type GetType = ReturnInsertLikeType | ReturnDeleteLikeType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType>> {
  try {
    const { searchParams } = new URL(request.url!)
    const comment_id = searchParams.get('comment_id')
    const is_delete = searchParams.get('is_delete')
    if (!comment_id || !is_delete) {
      throw new BadRequestError()
    }
    if (is_delete == 'true') {
      const res = await deleteLike(comment_id)
      return NextResponse.json(res)
    } else {
      const res = await insertLike(comment_id)
      return NextResponse.json(res)
    }
  } catch (error) {
    return handleApiRouteError(error)
  }
}
