import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { Flow } from '@/components/molecules/Flow'
import { ChatPage } from '@/components/templates/ChatPage/ChatPage'

import { deleteCookies } from '@/libs/actions/deleteCookies'

import { getBoardDetail } from '@/services/server/GetBoardDetail'

export type TeamPageProps = {
  params: {
    team_id: string
    board_id: string
  }
}

const BoardPage = async ({ params: { team_id, board_id } }: TeamPageProps) => {
  // 現在のボードの情報を取得
  const current_my_board_id = cookies().get('current_board_id')?.value

  const { prevFirstNullKey, boardDetailWithoutTypename } = await getBoardDetail(board_id)

  // チャットwsClientに用いるaccessToken
  const accessToken = await getSession().then((session) => session?.accessToken)
  if (!accessToken) {
    deleteCookies()
    redirect('/api/auth/login')
  }

  return (
    <div className='w-full h-full'>
      <Flow
        board_detail_id={board_id}
        toFirstOneIndicator={prevFirstNullKey}
        isTeamBoard={false}
        board_detail={boardDetailWithoutTypename}
        isAdminOfTheBoard={board_id == current_my_board_id}
      />
      <ChatPage current_board_id={board_id} accessToken={accessToken} />
    </div>
  )
}

export default BoardPage
