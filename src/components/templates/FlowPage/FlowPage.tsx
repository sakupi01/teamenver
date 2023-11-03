import { Flow } from '@/components/molecules/Flow'
import { FlowPane } from '@/components/molecules/FlowPane'

import { ReturnGetTeamBoardDetailType } from '@/services/server/GetTeamBoardDetail'

type FlowPageProps = {
  team_id: string
  board_detail_id: string
  prevFirstNullKey: string | null
  teamBoardDetailWithoutTypename: ReturnGetTeamBoardDetailType['teamBoardDetailWithoutTypename']
  isAdmin: boolean
}
export const FlowPage = ({
  team_id,
  board_detail_id,
  prevFirstNullKey,
  teamBoardDetailWithoutTypename,
  isAdmin,
}: FlowPageProps) => {
  return (
    <div className='w-full h-full grid grid-cols-5 gap-5'>
      <div className='col-span-4'>
        <Flow
          board_detail_id={board_detail_id}
          toFirstOneIndicator={prevFirstNullKey}
          isTeamBoard={true}
          team_id={team_id}
          board_detail={teamBoardDetailWithoutTypename}
          isAdminOfTheBoard={isAdmin}
        />
      </div>
      <div className='col-span-1'>
        <FlowPane />
      </div>
    </div>
  )
}
