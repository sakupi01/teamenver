'use server'

import { kvClient } from '../redis/kvClient'
export const handleCreateLinkKv = async (
  id: string,
  current_team_id: string | undefined,
) => {
  current_team_id !== undefined && (await kvClient.set(id, current_team_id))
  await kvClient.get(id)
}
