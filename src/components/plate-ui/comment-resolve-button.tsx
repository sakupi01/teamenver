'use client'

import {
  CommentResolveButton as CommentResolveButtonPrimitive,
  useComment,
} from '@udecode/plate-comments'
import React from 'react'

import { buttonVariants } from '@/components/plate-ui/button'
import { Icons } from '@/components/ui/icons'

import { cn } from '@/libs/utils'

export function CommentResolveButton() {
  const comment = useComment()!

  return (
    <CommentResolveButtonPrimitive
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'h-6 p-1 text-muted-foreground',
      )}
    >
      {comment.isResolved ? (
        <Icons.refresh className='h-4 w-4' />
      ) : (
        <Icons.check className='h-4 w-4' />
      )}
    </CommentResolveButtonPrimitive>
  )
}
