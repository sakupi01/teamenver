import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'

import { Switcher } from '../Switcher'

export const Approvers = () => {
  const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Approvers</Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>Approvers</h4>
            <p className='text-sm text-muted-foreground'>
              See who has approved this setting.
            </p>
          </div>
          <ScrollArea className='h-72 w-full rounded-md border'>
            <div className='p-4'>
              <h4 className='mb-4 text-sm font-medium leading-none'>
                Admin user is able to execute this project once all team members&apos;ve
                approved.
              </h4>
              {tags.map((tag) => (
                <Switcher tag={tag} key={tag} />
              ))}
            </div>
          </ScrollArea>
        </div>
      </PopoverContent>
    </Popover>
  )
}
