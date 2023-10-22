'use client'
import { Button } from '@/components/ui/button'

import { handleApproveInvitation } from '@/libs/actions/handleApproveInvitation'

type AsyncButtonProps = {
  label: string
  invitation_id?: string
  team_id?: string
}

export const AsyncButton = ({ label, ...props }: AsyncButtonProps) => {
  return (
    <Button onClick={() => handleApproveInvitation(props.invitation_id, props.team_id)}>
      {label}
    </Button>
  )
}
