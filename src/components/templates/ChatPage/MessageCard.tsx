import { HeartIcon } from 'lucide-react'

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
              <HeartIcon className='mr-1 h-3 w-3' />
              20k
            </div>
            <div>{time}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
