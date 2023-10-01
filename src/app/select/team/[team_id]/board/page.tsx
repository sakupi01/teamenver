'use client'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

import { handleCreateBoardAndDetails } from '@/libs/actions/handleCreateBoardAndDetails'

type BoardProps = {
  params: {
    team_id: string
  }
}

// million-ignore
export default function Board({ params }: BoardProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  if (!params.team_id) {
    router.push('/select/team')
  }

  return (
    <main className={'p-[5%]'}>
      <p>Your current team is: {params.team_id}</p>
      <button
        onClick={() =>
          startTransition(async () => await handleCreateBoardAndDetails(params.team_id))
        }
      >
        Create Board
      </button>
    </main>
  )
}
