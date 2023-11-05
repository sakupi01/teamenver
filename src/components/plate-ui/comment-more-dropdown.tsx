'use client'

import {
  useCommentDeleteButton,
  useCommentDeleteButtonState,
  useCommentEditButton,
  useCommentEditButtonState,
} from '@udecode/plate-comments'
import React from 'react'

import { Button } from '@/components/plate-ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/plate-ui/dropdown-menu'
import { Icons } from '@/components/ui/icons'

import { cn } from '@/libs/utils'

export function CommentMoreDropdown() {
  const editButtonState = useCommentEditButtonState()
  const editProps = useCommentEditButton(editButtonState)
  const deleteButtonState = useCommentDeleteButtonState()
  const deleteProps = useCommentDeleteButton(deleteButtonState)

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className={cn('h-6 p-1 text-muted-foreground')}>
          <Icons.more className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem {...(editProps as any)}>Edit comment</DropdownMenuItem>
        <DropdownMenuItem {...(deleteProps as any)}>Delete comment</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
