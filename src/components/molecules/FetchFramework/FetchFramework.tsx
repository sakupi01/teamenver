import { Button } from '@/components/atoms/Button/Button'

import supabaseClient from '@/libs/supabase/supabaseClient'
export const FetchFramework = async () => {
  const get = async () => {
    try {
      const { data: frameworks, error } = await supabaseClient
        .from('frameworks')
        .select('*')

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
    <>
      <Button size='medium' label='Button' />
      {framework.map((el) => {
        return (
          <p key={el.id}>
            <Button label={el.name!} />
          </p>
        )
      })}
    </>
  )
}
