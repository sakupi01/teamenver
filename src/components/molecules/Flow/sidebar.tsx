import React from 'react'

import { sidebarData } from '@/types/custom/sidebarData'

import { useSidebarState } from './hooks'

type SideBarProps = {
  frameworks: sidebarData
}

export const SideBar = ({ frameworks }: SideBarProps) => {
  const { loading, libraries, onDragStart } = useSidebarState(frameworks)
  return (
    <aside
      // write the above code in tailwindcss including media query
      className='border-r border-gray-300 p-4 text-sm bg-gray-50 w-1/5 md:w-[20%] md:max-width-[250px]'
    >
      <div className='mb-10'>
        <p className='text-red'>Choose how you apply {libraries.category}.</p>
        You can drag one of these nodes to the left.
      </div>
      {/* loading...をつけて要素を一時的に消したいが，消すとd&dができないのでundraggableにする */}
      {libraries.nodes.map((lb, index) => {
        return (
          <div
            className={'dndNode-container dndNode-default'}
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
        className={'dndNode-container dndNode-output'}
        onDragStart={(event) => onDragStart(event, { type: 'output', label: 'Output' })}
        draggable={loading}
      >
        Output
      </div>
    </aside>
  )
}
