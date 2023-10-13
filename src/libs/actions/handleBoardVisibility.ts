'use server'

import { revalidatePath } from 'next/cache'

import { updateBoardVisibility } from '@/services/server/UpdateBoardVisibility'

export async function handleBoardVisibility(turnToVisible: boolean) {
  await updateBoardVisibility(turnToVisible)
  revalidatePath('/')
}
