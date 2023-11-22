import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { ErrorType } from '@/libs/error/http'

import {
  ReturnUpdateUserInfoType,
  updateUserInfo,
  updateUserInfoInputParams,
} from '@/services/server/UpdateUserinfo'

export type GetType = ReturnUpdateUserInfoType

export async function POST(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType>> {
  try {
    const body = (await request.json()) as updateUserInfoInputParams

    const res = await updateUserInfo(body)
    return NextResponse.json(res)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
