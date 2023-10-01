'use server'
import { cookies } from 'next/headers'

export const deleteCookies = () => {
  cookies().delete('appSession')
  cookies().delete('current_team_id')
  cookies().delete('current_board_id')
  cookies().delete('current_board_detail_id')
  console.log('*****************')
  console.log('delete cookies')
  console.log('*****************')
}
