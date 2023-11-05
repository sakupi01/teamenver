import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger } from '@/components/ui/popover'

import * as GetApproversApi from '@/api/get/approvers/route'

import { Content } from './Content'

export const Approvers = ({
  agreements,
}: {
  agreements: GetApproversApi.GetType['agreements']
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Approvers</Button>
      </PopoverTrigger>
      <Content agreements={agreements} />
    </Popover>
  )
}
