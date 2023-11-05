import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'
import { MARK_SUBSCRIPT, MARK_SUPERSCRIPT } from '@udecode/plate-basic-marks'
import { collapseSelection, toggleMark, useEditorState } from '@udecode/plate-common'
import { MARK_HIGHLIGHT } from '@udecode/plate-highlight'
import { MARK_KBD } from '@udecode/plate-kbd'
import React from 'react'

import { Icons } from '@/components/ui/icons'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  useOpenState,
} from './dropdown-menu'
import { ToolbarButton } from './toolbar'
export function ToolbarDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorState()
  const openState = useOpenState()

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={openState.open} tooltip='Insert'>
          <Icons.more />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align='start'
        className='flex max-h-[500px] min-w-[180px] flex-col gap-0.5 overflow-y-auto'
      >
        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              key: MARK_HIGHLIGHT,
            })
            collapseSelection(editor, { edge: 'end' })
          }}
        >
          <Icons.highlight className='mr-2 h-5 w-5' />
          Highlight
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              key: MARK_KBD,
            })
            collapseSelection(editor, { edge: 'end' })
          }}
        >
          <Icons.kbd className='mr-2 h-5 w-5' />
          Keyboard input
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              key: MARK_SUBSCRIPT,
              clear: MARK_SUPERSCRIPT,
            })
          }}
        >
          <Icons.superscript className='mr-2 h-5 w-5' />
          Superscript
          {/* (⌘+,) */}
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              key: MARK_SUPERSCRIPT,
              clear: MARK_SUBSCRIPT,
            })
          }}
        >
          <Icons.subscript className='mr-2 h-5 w-5' />
          Subscript
          {/* (⌘+.) */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
