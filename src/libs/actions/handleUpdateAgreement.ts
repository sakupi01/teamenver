'use server'

import { revalidatePath } from 'next/cache'

import { updateAgreement } from '@/services/server/UpdateAgreement'

export const handleUpdateAgreement = async (isAgreed: boolean) => {
  await updateAgreement(isAgreed)
  revalidatePath('/')
}
