import { NextRequest, NextResponse } from 'next/server'

import { handleApiRouteError } from '@/libs/error'
import { ErrorType } from '@/libs/error/http'

import {
  ReturnUpdateBoardDetailType,
  updateBoardDetail,
} from '@/services/server/UpdateBoardDetail'
import {
  ReturnUpdateTeamBoardDetailType,
  updateTeamBoardDetail,
} from '@/services/server/UpdateTeamBoardDetail'

export type GetType = ReturnUpdateBoardDetailType | ReturnUpdateTeamBoardDetailType

export async function GET(
  request: NextRequest,
): Promise<NextResponse<GetType | ErrorType>> {
  try {
    const { searchParams } = new URL(request.url!)
    const category = searchParams.get('category')
    const label = searchParams.get('label')
    const isTeamBoard = searchParams.get('isTeamBoard')

    if (Boolean(isTeamBoard)) {
      const res = await updateTeamBoardDetail({
        [`${
          category
            ? category == 'css-framework'
              ? 'css_library'
              : category == 'ui-framework'
              ? 'ui_library'
              : category
            : category
        }`]: label,
      })
      return NextResponse.json(res)
    } else {
      const res = await updateBoardDetail({
        [`${
          category
            ? category == 'css-framework'
              ? 'css_library'
              : category == 'ui-framework'
              ? 'ui_library'
              : category
            : category
        }`]: label,
      })
      return NextResponse.json(res)
    }
  } catch (error) {
    return handleApiRouteError(error)
  }
}
