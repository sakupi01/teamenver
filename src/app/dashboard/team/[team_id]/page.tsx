import { Flow } from '@/components/molecules/Flow'

import supabaseClient from '@/libs/supabase/supabaseClient'

import { sidebarData } from '@/types/custom/sidebarData'

export type TeamPageProps = {
  params: {
    team_id: string
  }
}
const TeamPage = async ({
  params: { team_id },
}: {
  params: {
    team_id: string
  }
}) => {
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

  // console.log(params.team_id)

  const frameworks = await get()
  return (
    <div className='w-full h-full'>
      <Flow
        frameworks={
          frameworks ? { category: 'framework', nodes: frameworks } : ({} as sidebarData)
        }
      />
    </div>
  )
}

export default TeamPage
