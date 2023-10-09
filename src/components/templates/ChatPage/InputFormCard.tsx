import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { deleteCookies } from '@/libs/actions/deleteCookies'
import { HttpError } from '@/libs/error/http'

import { insertMessage } from '@/services/client/InsertMessage'

export const InputFormCard = () => {
  const route = useRouter()
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const content = e.currentTarget.content.value
    try {
      await insertMessage(content)
    } catch (error) {
      if (error instanceof HttpError && error.status == 401) {
        deleteCookies()
        route.push('/api/auth/logout')
      }
    }
  }

  return (
    <Card className='w-[300px] h-[200px] p-4'>
      <CardContent className='h-full p-0'>
        <form
          onSubmit={handleSendMessage}
          method='POST'
          className='h-full flex flex-col space-y-3'
        >
          <textarea
            name='content'
            className='h-full resize-none border rounded-lg border-border'
            defaultValue='Comment your opinion...'
          ></textarea>
          <Button type='submit'>Send</Button>
        </form>
      </CardContent>
    </Card>
  )
}
