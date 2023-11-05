'use server'

import { updateAgreement } from '@/services/server/UpdateAgreement'

export const handleUpdateAgreement = async (isAgreed: boolean) => {
  await updateAgreement(isAgreed)
}
