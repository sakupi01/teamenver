import { PopoverContent } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'

import * as GetApproversApi from '@/api/get/approvers/route'

import { Switcher } from '../Switcher'

export const Content = ({
  agreements,
}: {
  agreements: GetApproversApi.GetType['agreements']
}) => {
  return (
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
            {agreements.map((agreement) => (
              <Switcher
                isAgreed={agreement.is_agreed}
                user={agreement.user}
                key={agreement.user.id}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </PopoverContent>
  )
}
