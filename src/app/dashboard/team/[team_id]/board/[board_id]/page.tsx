import { getSession } from '@auth0/nextjs-auth0'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { Flow } from '@/components/molecules/Flow'
import { ChatPage } from '@/components/templates/ChatPage/ChatPage'

import { deleteCookies } from '@/libs/actions/deleteCookies'
import supabaseClient from '@/libs/supabase/supabaseClient'

import { sidebarData } from '@/types/custom/sidebarData'

import { getBoardDetail } from '@/services/server/GetBoardDetail'

import { PubPriButton } from './PubPriButton'
export type TeamPageProps = {
  params: {
    team_id: string
    board_id: string
  }
}

const BoardPage = async ({ params: { team_id, board_id } }: TeamPageProps) => {
  // サイドバーの初期値
  const get = async () => {
    try {
      const { data: frameworks, error } = await supabaseClient
        .from('frameworks')
        .select('name')
        .order('webframe_want_to_work_with_count', { ascending: false })
        .eq('ableToSetWithNode', true)
      return frameworks
    } catch (error) {
      console.log(error)
    }
  }
  const frameworks = await get()

  // 現在のボードの情報を取得
  const current_my_board_id = cookies().get('current_board_id')?.value
  const current_my_board_detail_id = cookies().get('current_board_detail_id')?.value
  if (!current_my_board_id || !current_my_board_detail_id) {
    deleteCookies()
    redirect('/api/auth/login')
  }
  const board_details = await getBoardDetail(current_my_board_detail_id)

  // チャットwsClientに用いるaccessToken
  const accessToken = await getSession().then((session) => session?.accessToken)
  if (!accessToken) {
    deleteCookies()
    redirect('/api/auth/login')
  }

  return (
    <div className='w-full h-full'>
      {board_id == current_my_board_id ? (
        board_details.boards[0].is_public ? (
          <PubPriButton label='非公開にする' turnToVisible={false} />
        ) : (
          <PubPriButton label='公開にする' turnToVisible={true} />
        )
      ) : (
        ''
      )}
      <Flow
        frameworks={
          frameworks ? { category: 'framework', nodes: frameworks } : ({} as sidebarData)
        }
        board_detail_id={board_details.board_details[0].id}
      />
      <ChatPage current_board_id={board_id} accessToken={accessToken} />
    </div>
  )
}

export default BoardPage
