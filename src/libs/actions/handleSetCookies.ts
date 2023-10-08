'use server'
import { cookies } from 'next/headers'

export const handleSetCookies = (team_id: string) => {
  cookies().set('current_team_id', team_id)
}
