import { redirect } from 'next/navigation'

import { FlowPage } from '@/components/templates/FlowPage'

import { getTeamBoardDetail } from '@/services/server/GetTeamBoardDetail'

export type TeamPageProps = {
  params: {
    team_id: string
  }
}
const TeamPage = async ({
  params: { team_id },
}: {
  params: {
    team_id: string
  }
}) => {
  const { id, prevFirstNullKey, teamBoardDetailWithoutTypename, isAdmin } =
    await getTeamBoardDetail(team_id)

  if (!id) {
    redirect('/select/team')
  }

  return (
    <FlowPage
      team_id={team_id}
      board_detail_id={id}
      prevFirstNullKey={prevFirstNullKey}
      teamBoardDetailWithoutTypename={teamBoardDetailWithoutTypename}
      isAdmin={isAdmin}
    />
  )
}

export default TeamPage
