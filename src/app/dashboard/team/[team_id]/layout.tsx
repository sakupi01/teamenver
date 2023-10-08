import { Navigation } from '@/components/atoms/Navigation/Navigation'
import { Toaster } from '@/components/ui/toaster'

import { getTeamInfo } from '@/services/server/GetTeamInfo'

type DashBoardLayoutProps = {
  children: React.ReactNode
  params: {
    team_id: string
  }
}
export type NavBoardProps = {
  id: string
  userName: string
}
export default async function DashBoardLayout({
  children,
  params: { team_id },
}: DashBoardLayoutProps) {
  const public_boards_info: Array<NavBoardProps> | undefined = (
    await getTeamInfo(team_id)
  ).teams_by_pk?.boards.map((board) => {
    return {
      id: board.id,
      userName: board.user.name,
    }
  })

  return (
    <>
      {team_id && (
        <Navigation current_team_id={team_id} public_boards_info={public_boards_info} />
      )}
      <div className='py-10'>
        <main className='px-1'>{children}</main>
        <Toaster />
      </div>
    </>
  )
}
