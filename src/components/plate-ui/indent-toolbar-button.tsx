import { useIndentButton } from '@udecode/plate-indent'
import React from 'react'

import { Icons } from '@/components/ui/icons'

import { ToolbarButton } from './toolbar'

export function IndentToolbarButton() {
  const { props } = useIndentButton()

  return (
    <ToolbarButton tooltip='Indent' {...props}>
      <Icons.indent />
    </ToolbarButton>
  )
}
