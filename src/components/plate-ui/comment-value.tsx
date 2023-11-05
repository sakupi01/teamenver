'use client';

import {
  CommentEditActions,
  CommentEditTextarea,
  useCommentValue,
} from '@udecode/plate-comments';
import React from 'react';

import { buttonVariants } from '@/components/plate-ui/button';
import { inputVariants } from '@/components/plate-ui/input';

import { cn } from '@/libs/utils';

export function CommentValue() {
  const { textareaRef } = useCommentValue();

  return (
    <div className="my-2 flex flex-col items-end gap-2">
      <CommentEditTextarea
        ref={textareaRef}
        className={cn(inputVariants(), 'min-h-[60px]')}
      />

      <div className="flex space-x-2">
        <CommentEditActions.CancelButton
          className={buttonVariants({ variant: 'outline', size: 'xs' })}
        >
          Cancel
        </CommentEditActions.CancelButton>

        <CommentEditActions.SaveButton
          className={buttonVariants({ variant: 'default', size: 'xs' })}
        >
          Save
        </CommentEditActions.SaveButton>
      </div>
    </div>
  );
}
