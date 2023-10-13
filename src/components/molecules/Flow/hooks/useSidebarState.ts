import React, { useState } from 'react'

import { nodeInfo } from '@/types/custom/nodeInfo'
import { sidebarData } from '@/types/custom/sidebarData'

import { updateBoardDetail } from '@/services/client/UpdateBoardDetail'

import { fetchData } from '../helper/sideBarHelpers'

export const useSidebarState = (isTeamBoard: boolean, board_detail_id: string) => {
  const [loading, setLoading] = useState(true)
  const [libraries, setLibraries] = useState<sidebarData>({
    category: '',
    nodes: [{ name: 'loading...' }],
  } as sidebarData)

  const onDragStart = async (
    event: React.DragEvent<HTMLDivElement>,
    nodeInfo: nodeInfo,
  ) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeInfo))
    event.dataTransfer.effectAllowed = 'move'
    if (nodeInfo.type === 'default') {
      setLoading(false)

      await updateBoardDetail(nodeInfo.category, nodeInfo.label, isTeamBoard)

      const data = await fetchData(
        nodeInfo.category ? nodeInfo.category : '',
        board_detail_id,
        isTeamBoard,
      )

      const libs: sidebarData = JSON.parse(data)

      setLibraries(libs)

      setLoading(true)
    }
  }
  return { loading, libraries, onDragStart, setLoading, setLibraries }
}
