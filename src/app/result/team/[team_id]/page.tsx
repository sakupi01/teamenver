import { NodeContainerPage } from '@/components/templates/NodeContainerPage/NodeContainerPage'

import { getTeamBoardDetail } from '@/services/server/GetTeamBoardDetail'

export default async function Result({
  params: { team_id },
}: {
  params: { team_id: string }
}) {
  const { teamBoardDetailWithoutTypename } = await getTeamBoardDetail(team_id)

  return (
    <main className={'p-[5%]'}>
      <NodeContainerPage
        teamBoardDetailWithoutTypename={teamBoardDetailWithoutTypename}
      />
    </main>
  )
}
