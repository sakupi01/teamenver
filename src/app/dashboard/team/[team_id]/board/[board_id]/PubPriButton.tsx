'use client'
import { useTransition } from 'react'

import { Button } from '@/components/ui/button'

import { handleBoardVisibility } from '@/libs/actions/handleBoardVisibility'
type PubPriButtonProps = {
  label: string
  turnToVisible: boolean
}
export const PubPriButton = ({ label, turnToVisible }: PubPriButtonProps) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div className='mb-5'>
      <Button onClick={() => startTransition(() => handleBoardVisibility(turnToVisible))}>
        {isPending ? 'loading...' : label}
      </Button>
    </div>
  )
}
