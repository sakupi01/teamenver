import { useState } from 'react'

import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'

type SwitcherProps = {
  tag: string
}
export const Switcher = ({ tag }: SwitcherProps) => {
  const [isApproved, setIsApproved] = useState(false)

  return (
    <>
      <div className='grid grid-cols-2'>
        <div className='text-sm'>{tag}</div>
        <div className='flex items-center space-x-2'>
          <Switch id='approve' onCheckedChange={() => setIsApproved(!isApproved)} />
          <Label htmlFor='approve' className='text-sm font-medium leading-none'>
            {isApproved ? '❤️' : '🩶'}
          </Label>
        </div>
      </div>
      <Separator className='my-2' />
    </>
  )
}
