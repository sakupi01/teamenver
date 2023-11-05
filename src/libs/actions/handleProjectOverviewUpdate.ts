'use server'

import { Value } from '@udecode/plate-common'

import { updateProjectOverview } from '@/services/server/UpdateProjectOverview'

export const handleProjectOverviewUpdate = async (content: Value) => {
  await updateProjectOverview(content)
}
