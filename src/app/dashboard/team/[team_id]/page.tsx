import { Flow } from '@/components/molecules/Flow'

import supabaseClient from '@/libs/supabase/supabaseClient'

import { sidebarData } from '@/types/custom/sidebarData'

export type TeamPageProps = {
  params: {
    team_id: string
  }
}
const TeamPage = async ({ params: { team_id } }: TeamPageProps) => {
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
  return (
    <main className={'p-[5%]'}>
      <h1>Team {team_id}`&apos;`s Page</h1>

      <button>create board</button>
      {/* Next linting rules might suggest using the Link component instead of an anchor tag. The Link component is meant to perform client-side transitions between pages. As the links point to an API route and not to a page, you should keep them as anchor tags. */}
      <a href='/api/auth/logout'>Logout</a>
      <Flow
        frameworks={
          frameworks ? { category: 'framework', nodes: frameworks } : ({} as sidebarData)
        }
      />
    </main>
  )
}

export default TeamPage
