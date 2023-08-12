
import supabaseClient from '@/libs/supabase/supabaseClient'


import { sidebarData } from '@/types/custom/sidebarData'

import { css } from 'styled-system/css'

import { Flow } from '../components/molecules/Flow/Flow'
export default async function Home() {


  const get = async () => {
    try {
      const { data: frameworks, error } = await supabaseClient
        .from('frameworks')
        .select('name')
        .order('webframe_want_to_work_with_count', { ascending: false })
      return frameworks
    } catch (error) {
      console.log(error)
    }
  }

  const frameworks = await get()

  return (
    <main className={css({ padding: '5%' })}>
      {/* Next linting rules might suggest using the Link component instead of an anchor tag. The Link component is meant to perform client-side transitions between pages. As the links point to an API route and not to a page, you should keep them as anchor tags. */}
      <a href='/api/auth/logout'>Logout</a>
      <Flow frameworks={frameworks ? { name: 'framework', nodes: frameworks } : {} as sidebarData} />
    </main>
  )
}