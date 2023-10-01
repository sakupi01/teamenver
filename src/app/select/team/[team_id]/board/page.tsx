import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { createBoard } from '@/services/server/CreateBoard'
import { createBoardDetail } from '@/services/server/CreateBoardDetail'

type BoardProps = {
  params: {
    team_id: string
  }
}

export default function Board({ params }: BoardProps) {
  if (!params.team_id) {
    redirect('/select/team')
  }

  const handleCreateBoardAndDetails = async () => {
    'use server'
    console.log('clicked!')
    await createBoard()
    await createBoardDetail()
  }

  return (
    <main className={'p-[5%]'}>
      <p>Your current team is: {params.team_id}</p>
      <Button onClick={handleCreateBoardAndDetails}>Create Board</Button>
    </main>
  )
}
