import React from 'react'

import { nodeInfo } from '@/types/custom/nodeInfo'
import { Database } from '@/types/supabase'

import { css } from 'styled-system/css'

import { dndNode } from './dndNode.css'

type SideBarProps= {
  frameworks: Array<Database['public']['Tables']['frameworks']['Row']>
}

export const SideBar = ({frameworks}: SideBarProps) => {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeInfo: nodeInfo) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeInfo))
    event.dataTransfer.effectAllowed = 'move'
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
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className={dndNode({ type: 'input' })}
        onDragStart={(event) => onDragStart(event, {type: 'input', label: 'Input'})}
        draggable
      >
        Input
      </div>
      {
        frameworks.map((fw) => {
          return(
            <div
              className={dndNode({ type: 'default' })}
              onDragStart={(event) => onDragStart(event, {type: 'default', label: fw.name})}
              draggable
              key={fw.id}
            >
              {fw.name}
            </div>
          )
        })
      }
      <div
        className={dndNode({ type: 'output' })}
        onDragStart={(event) => onDragStart(event, {type: 'output', label: 'Output'})}
        draggable
      >
        Output
      </div>
    </aside>
  )
}
