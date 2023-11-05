import useSWR, { mutate } from 'swr'

import { PopoverContent } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'

import * as GetApproversApi from '@/api/get/approvers/route'

import { Switcher } from '../Switcher'

export const Content = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, isLoading, error } = useSWR<GetApproversApi.GetType>(
    '/api/get/approvers',
    fetcher,
  )
  mutate('/api/get/approvers')
  if (error) {
    return <div>failed to load</div>
  }
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
            {data === undefined || isLoading ? (
              <Skeleton className='h-4 w-[250px]' />
            ) : (
              data.agreements.map((agreement) => (
                <Switcher
                  isAgreed={agreement.is_agreed}
                  user={agreement.user}
                  key={agreement.user.id}
                />
              ))
            )}
          </div>
        </ScrollArea>
      </div>
    </PopoverContent>
  )
}
