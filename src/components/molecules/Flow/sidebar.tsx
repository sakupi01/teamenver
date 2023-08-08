import React, { useState } from 'react'

import { nodeInfo } from '@/types/custom/nodeInfo'
import { Object } from '@/types/libraries'
import { Package } from '@/types/libraries'
import { Database } from '@/types/supabase'

import { getLibraries } from '@/services/client/GetLibraries'
import { css } from 'styled-system/css'

import { dndNode } from './dndNode.css'


type SideBarProps= {
  frameworks: Array<Database['public']['Tables']['frameworks']['Row']>
}

export const SideBar = ({frameworks}: SideBarProps) => {

  const [loading, setLoading] = useState(true);
  const [libraries, setLibraries] = useState<Array<Database['public']['Tables']['frameworks']['Row']> | Array<Package>>(frameworks)
  const fetchData = async(label: string | null) => {
    const json = await getLibraries(label);
    const data = JSON.stringify(json);
    return data;
  }
  const onDragStart = async(event: React.DragEvent<HTMLDivElement>, nodeInfo: nodeInfo) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeInfo))
    event.dataTransfer.effectAllowed = 'move'
    if(nodeInfo.type === 'default'){
      setLoading(false);
      const data = await fetchData(nodeInfo.label);
      const libs: Array<Package> = JSON.parse(data).data.objects.map((obj: Object) => obj.package);
      console.log(libs);
      setLibraries(libs);
      setLoading(true);
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
        You can drag these nodes to the pane on the right.
      </div>
      {
        libraries.map((lb, index) => {
          return(
            <div
              className={dndNode({ type: 'default' })}
              onDragStart={(event) => onDragStart(event, {type: 'default', label: lb.name})}
              draggable={loading}
              key={index}
            >
              {lb.name}
            </div>
          )
        })
      }
      <div
        className={dndNode({ type: 'output' })}
        onDragStart={(event) => onDragStart(event, {type: 'output', label: 'Output'})}
        draggable={loading}
      >
        Output
      </div>
    </aside>
  )
}
