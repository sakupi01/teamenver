import { PlateLeaf, PlateLeafProps } from '@udecode/plate-common';
import React from 'react';

import { cn } from '@/libs/utils';

export function HighlightLeaf({
  className,
  children,
  ...props
}: PlateLeafProps) {
  return (
    <PlateLeaf
      asChild
      className={cn('bg-primary/20 text-inherit dark:bg-primary/40', className)}
      {...props}
    >
      <mark>{children}</mark>
    </PlateLeaf>
  );
}
