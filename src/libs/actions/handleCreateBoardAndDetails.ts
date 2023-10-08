'use server'

import { redirect } from 'next/navigation'

import { createBoard } from '@/services/server/CreateBoard'
import { createBoardDetail } from '@/services/server/CreateBoardDetail'

export const handleCreateBoardAndDetails = async (
  current_team_id: string | undefined,
) => {
  const { insert_boards } = await createBoard()
  await createBoardDetail()
  redirect(`/dashboard/team/${current_team_id}/board/${insert_boards?.returning[0].id}`)
}
