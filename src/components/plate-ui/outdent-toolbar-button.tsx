import { useOutdentButton } from '@udecode/plate-indent'
import React from 'react'

import { Icons } from '@/components/ui/icons'

import { ToolbarButton } from './toolbar'

export function OutdentToolbarButton() {
  const { props } = useOutdentButton()

  return (
    <ToolbarButton tooltip='Outdent' {...props}>
      <Icons.outdent />
    </ToolbarButton>
  )
}
