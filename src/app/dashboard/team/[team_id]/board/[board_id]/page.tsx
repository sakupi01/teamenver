import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from 'next/navigation'

import { Flow } from '@/components/molecules/Flow'
import { ChatPage } from '@/components/templates/ChatPage/ChatPage'

import { deleteCookies } from '@/libs/actions/deleteCookies'
import supabaseClient from '@/libs/supabase/supabaseClient'

import { sidebarData } from '@/types/custom/sidebarData'
export type TeamPageProps = {
  params: {
    team_id: string
    board_id: string
  }
}

const BoardPage = async ({ params: { team_id, board_id } }: TeamPageProps) => {
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

  const accessToken = await getSession().then((session) => session?.accessToken)

  if (!accessToken) {
    deleteCookies()
    redirect('/api/auth/login')
  }

  return (
    <div className='w-full h-full'>
      <Flow
        frameworks={
          frameworks ? { category: 'framework', nodes: frameworks } : ({} as sidebarData)
        }
      />
      <ChatPage current_board_id={board_id} accessToken={accessToken} />
    </div>
  )
}

export default BoardPage
