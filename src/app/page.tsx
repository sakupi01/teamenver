import supabaseClient from '@/libs/supabase/supabaseClient'

import { css } from 'styled-system/css'

import { Flow } from '../components/molecules/Flow/Flow'
export default async function Home() {
  const get = async () => {
    try {
      const { data: frameworks, error } = await supabaseClient
        .from('frameworks')
        .select('*')
      console.log(JSON.stringify(frameworks))
      console.log('here')
      return frameworks
    } catch (error) {
      console.log(error)
    }
  }

  const frameworks = await get()
  return (
    <main className={css({ padding: '5%' })}>
      <Flow frameworks={frameworks ? frameworks : []} />
    </main>
  )
}
