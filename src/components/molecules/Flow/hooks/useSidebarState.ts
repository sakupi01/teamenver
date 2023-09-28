import React, { useState } from 'react'

import { nodeInfo } from '@/types/custom/nodeInfo'
import { sidebarData } from '@/types/custom/sidebarData'

import { updateBoardDetail } from '@/services/client/UpdateBoardDetail'

import { fetchData } from '../helper/sideBarHelpers'


export const useSidebarState = (frameworks : sidebarData) => {
  const [loading, setLoading] = useState(true)
  const [libraries, setLibraries] = useState<sidebarData>(frameworks)

  const onDragStart = async (
    event: React.DragEvent<HTMLDivElement>,
    nodeInfo: nodeInfo,
  ) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeInfo))
    event.dataTransfer.effectAllowed = 'move'
    if (nodeInfo.type === 'default') {
      setLoading(false)

      await updateBoardDetail(nodeInfo.category, nodeInfo.label)

      const data = await fetchData(nodeInfo.category ? nodeInfo.category : '')

      const libs: sidebarData = JSON.parse(data)

      setLibraries(libs)

      setLoading(true)
    }
  }
  return { loading, libraries, onDragStart }
}
