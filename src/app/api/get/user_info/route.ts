import { NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { ErrorType } from '@/libs/error/http'

import { getUserInfo, ReturnGetUserInfoType } from '@/services/server/GetUserInfo'

export type GetType = ReturnGetUserInfoType

export async function GET(): Promise<
  NextResponse<GetType | ErrorType | { message: string; status: number }>
> {
  try {
    const res = await getUserInfo()
    return NextResponse.json(res)
  } catch (error) {
    return handleApiRouteError(error)
  }
}
