import { useTransition } from 'react'

import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'

import * as GetApproversApi from '@/api/get/approvers/route'

import { handleUpdateAgreement } from '@/libs/actions/handleUpdateAgreement'

type SwitcherProps = {
  isAgreed: boolean
  user: GetApproversApi.GetType['agreements'][0]['user']
}
export const Switcher = ({ isAgreed, user }: SwitcherProps) => {
  const [isPending, startTransition] = useTransition()

  return (
    <>
      <div className='grid grid-cols-2'>
        <div className='text-sm'>{user.name}</div>
        <div className='flex items-center space-x-2'>
          <Switch
            checked={isAgreed}
            id='approve'
            onCheckedChange={() =>
              startTransition(() => handleUpdateAgreement(!isAgreed))
            }
          />
          {isPending ? (
            'Updating...'
          ) : (
            <Label htmlFor='approve' className='text-sm font-medium leading-none'>
              {isAgreed ? '❤️' : '🩶'}
            </Label>
          )}
        </div>
      </div>
      <Separator className='my-2' />
    </>
  )
}
