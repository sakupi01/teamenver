import { Button } from '@/components/Button/Button'

import supabaseClient from '@/libs/supabaseClient'

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

  const framework = await get()
  if (!framework) {
    return <p>Loading Error.</p>
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <a href='/api/auth/login'>Login</a>
      <a href='/api/auth/logout'>Logout</a>
      <Button size='medium' label='Button' />
      {framework.map((el) => {
        return (
          <p key={el.id}>
            <Button label={el.name!}/>
          </p>
        )
      })}
    </main>
  )
}
