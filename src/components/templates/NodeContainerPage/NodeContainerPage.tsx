'use client'
import dynamic from 'next/dynamic'

import { ReturnGetTeamBoardDetailType } from '@/services/server/GetTeamBoardDetail'
const NodeContainer = dynamic(
  () =>
    import('@/components/organisms/NodeContainer/NodeContainer').then(
      (module) => module.NodeContainer,
    ),
  {
    ssr: false,
    loading: () => <div>読み込み中．．．</div>,
  },
)
type NodeContainerPageProps = {
  teamBoardDetailWithoutTypename: ReturnGetTeamBoardDetailType['teamBoardDetailWithoutTypename']
}

export const NodeContainerPage = ({
  teamBoardDetailWithoutTypename,
}: NodeContainerPageProps) => {
  return (
    <main className={'p-[5%]'}>
      <NodeContainer teamBoardDetailWithoutTypename={teamBoardDetailWithoutTypename} />
    </main>
  )
}
