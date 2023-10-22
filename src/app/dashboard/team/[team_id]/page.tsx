import { redirect } from 'next/navigation'

import { Flow } from '@/components/molecules/Flow'

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
    <div className='w-full h-full'>
      <Flow
        board_detail_id={id}
        toFirstOneIndicator={prevFirstNullKey}
        isTeamBoard={true}
        team_id={team_id}
        board_detail={teamBoardDetailWithoutTypename}
        isAdminOfTheBoard={isAdmin}
      />
    </div>
  )
}

export default TeamPage
