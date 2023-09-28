import React from 'react'

import { sidebarData } from '@/types/custom/sidebarData'

import { css } from 'styled-system/css'

import { dndNode } from './dndNode.css'
import { useSidebarState } from './hooks'

type SideBarProps = {
  frameworks: sidebarData
}

export const SideBar = ({ frameworks }: SideBarProps) => {
  const { loading, libraries, onDragStart } = useSidebarState(frameworks)
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
