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
  // TODO: team_id, board_idをもとに現在のボードの状態を取得してくる
  // TODO: team_id, board_idをもとに次のサイドバーの状態を取得してくるOR指し示す何かを渡す
  const { id, prevFirstNullKey, teamBoardDetailWithoutTypename } =
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
      />
    </div>
  )
}

export default TeamPage
