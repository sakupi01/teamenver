import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { ChatPage } from '@/components/templates/ChatPage/ChatPage'

export default async function Chat() {
  const accessToken = await getSession().then((session) => session?.accessToken)
  const current_board_id = cookies().get('current_board_id')?.value

  if (accessToken === undefined) {
    redirect('/auth/login')
  }
  if (!current_board_id) {
    redirect('/select/board')
  }

  return <ChatPage current_board_id={current_board_id} accessToken={accessToken} />
}
