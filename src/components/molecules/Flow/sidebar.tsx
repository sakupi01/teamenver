import React, { useEffect } from 'react'

import { sidebarData } from '@/types/custom/sidebarData'

import { fetchData } from './helper/sideBarHelpers'
import { useSidebarState } from './hooks'

type SideBarProps = {
  toFirstOneIndicator: string | null
  isTeamBoard: boolean
  board_detail_id: string
}

export const SideBar = ({
  toFirstOneIndicator,
  isTeamBoard,
  board_detail_id,
}: SideBarProps) => {
  const { loading, libraries, onDragStart, setLoading, setLibraries } = useSidebarState(
    isTeamBoard,
    board_detail_id,
  )

  useEffect(() => {
    if (toFirstOneIndicator !== undefined) {
      const get = async () => {
        setLoading(false)
        const data = await fetchData(toFirstOneIndicator, board_detail_id, isTeamBoard)
        const libs: sidebarData = JSON.parse(data)
        setLibraries(libs)
        setLoading(true)
      }
      get()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <aside className='border-r border-gray-300 p-4 text-sm bg-gray-50 w-1/5 md:w-[20%] md:max-width-[250px]'>
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
