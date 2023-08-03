import { NextRequest, NextResponse } from 'next/server'

import { GetLibrariesType, getLibraries } from '@/services/server/GetLibraries'

export type GetType = GetLibrariesType

export async function GET(request: NextRequest): Promise<NextResponse<GetType>> {
  const { searchParams } = new URL(request.url!)
  const query = searchParams.get('query')
  const res = await getLibraries({ query })
  if (!res) {
    return NextResponse.json({ error: 'Data was not returned.' })
  }
  return NextResponse.json(res)
}
