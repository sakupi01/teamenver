import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger } from '@/components/ui/popover'

import { Content } from './Content'

export const Approvers = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Approvers</Button>
      </PopoverTrigger>
      <Content />
    </Popover>
  )
}
