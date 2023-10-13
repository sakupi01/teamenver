import { HeartIcon } from 'lucide-react'
import useSWR from 'node_modules/swr/core/dist/index.mjs'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

import { GetLastMessagesQuery } from '@/gql/codegen/hasura/graphql'

import { timeConverter } from './helper/timeConverter'

export const MessageCard = ({
  message,
}: {
  message: GetLastMessagesQuery['comments'][0]
}) => {
  const [likeCount, setLikeCount] = useState<number>(
    message.likes_aggregate.aggregate?.count || 0,
  )
  const [isDelete, setIsDelete] = useState<boolean>(message.likes.length > 0) // message.likes.length is the number of likes that you liked
  const [shouldFetch, setShouldFetch] = useState(false)

  const fetcher = (url: string) =>
    fetch(url).then((res) => {
      !isDelete
        ? setLikeCount((prev) => (prev += 1))
        : setLikeCount((prev) => (prev -= 1))

      setShouldFetch(!shouldFetch)
      setIsDelete(!isDelete)
      return res.json()
    })
  useSWR(
    !shouldFetch ? null : `/api/like?comment_id=${message.id}&is_delete=${isDelete}`,
    fetcher,
  )

  const handleLike = () => {
    setShouldFetch(!shouldFetch)
  }
  const time = timeConverter(message.updated_at)
  return (
    <Card className='w-[250px] h-[200px] p-2'>
      <CardContent className='w-full h-full flex flex-col items-start justify-between space-y-1 p-2'>
        <ScrollArea className='w-full h-full'>
          <p className='text-sm font-medium leading-none'>{message.content}</p>
          <ScrollBar orientation='vertical' />
        </ScrollArea>
        <div>
          <Separator className='my-2' />
          <p className='text-sm font-medium text-muted-foreground'>
            by {message.user.name}
          </p>
          <div className='flex space-x-4 text-sm text-muted-foreground'>
            <div className='flex items-center'>
              <Button onClick={handleLike} size='icon' variant='link'>
                <HeartIcon className='mr-1 h-3 w-3 ' color={isDelete ? 'red' : 'gray'} />
              </Button>
              {likeCount}
            </div>
            <div className='flex items-center'>
              <p>{time}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
