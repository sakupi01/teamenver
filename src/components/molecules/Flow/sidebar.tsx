import React, { useState } from 'react'

import { nodeInfo } from '@/types/custom/nodeInfo'
import { sidebarData } from '@/types/custom/sidebarData'

import { updateBoardDetail } from '@/services/client/UpdateBoardDetail'
import { css } from 'styled-system/css'

import { dndNode } from './dndNode.css'
import { fetchData } from './helper/sideBarHelpers'

type SideBarProps = {
  frameworks: sidebarData
}

export const SideBar = ({ frameworks }: SideBarProps) => {
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
  return (
    <aside
      className={css({
        borderRight: '1px solid #eee',
        padding: '15px 10px',
        fontSize: '12px',
        background: '#fcfcfc',
        md: {
          width: '20%',
          maxWidth: '250px',
        },
      })}
    >
      <div className={css({ marginBottom: '10px' })}>
        <p className={css({ color: 'red' })}>
          Choose how you apply {libraries.category}.
        </p>
        You can drag these nodes to the pane on the left.
      </div>
      {/* loading...をつけて要素を一時的に消したいが，消すとd&dができないのでundraggableにする */}
      {libraries.nodes.map((lb, index) => {
        return (
          <div
            className={dndNode({ type: 'default' })}
            onDragStart={(event) =>
              onDragStart(event, {
                type: 'default',
                category: libraries.category,
                label: lb.name,
              })
            }
            draggable={loading}
            key={index}
          >
            {lb.name}
          </div>
        )
      })}
      <div
        className={dndNode({ type: 'output' })}
        onDragStart={(event) => onDragStart(event, { type: 'output', label: 'Output' })}
        draggable={loading}
      >
        Output
      </div>
    </aside>
  )
}
