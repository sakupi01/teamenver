import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

import { Button } from '@/components/ui/button'

import { sidebarData } from '@/types/custom/sidebarData'

import { fetchData } from './helper/sideBarHelpers'
import { useSidebarState } from './hooks'

type SideBarProps = {
  toFirstOneIndicator: string | null
  isTeamBoard: boolean
  team_id?: string
  board_detail_id: string
}

export const SideBar = ({
  toFirstOneIndicator,
  isTeamBoard,
  team_id,
  board_detail_id,
}: SideBarProps) => {
  const router = useRouter()

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

  if (!libraries) {
    return (
      <aside className='border-r border-gray-300 p-4 text-sm bg-gray-50 w-1/5 md:w-[20%] md:max-width-[250px]'>
        <div className='mb-10'>
          <p className='text-red-500'>The settings has been saved.</p>
        </div>
        {isTeamBoard ? (
          <Button onClick={() => router.push(`/result/team/${team_id}`)}>実行</Button>
        ) : (
          <></>
        )}
      </aside>
    )
  }
  return (
    <aside className='border-r border-gray-300 p-4 text-sm bg-gray-50 w-1/5 md:w-[20%] md:max-width-[250px]'>
      <div className='mb-10'>
        <p>
          Choose how you apply <span className='text-red-500'>{libraries.category}</span>.
          You can drag one of these nodes to the left.
        </p>
      </div>
      {libraries.nodes.map((lb, index) => {
        return (
          <div
            className={'dndNode-container dndNode-default'}
            onDragStart={(event) =>
              onDragStart(event, {
                type: 'default',
                category: libraries.category,
                key: libraries.category,
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
    </aside>
  )
}
