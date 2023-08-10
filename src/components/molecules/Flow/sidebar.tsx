import React, { useState } from 'react'

import { nodeInfo } from '@/types/custom/nodeInfo'

import { getTopics } from '@/services/client/GetTopics'
import { css } from 'styled-system/css'

import { dndNode } from './dndNode.css'


type SideBarProps= {
  frameworks: Array<{name: string | null}>
}

export const SideBar = ({frameworks}: SideBarProps) => {

  const [loading, setLoading] = useState(true);
  const [libraries, setLibraries] = useState<Array<{name: string | null}>>(frameworks)
  const fetchData = async() => {
    const json = await getTopics('css-framework');
    const data = JSON.stringify(json.topic?.repositories.nodes?.map(node => {return {name: node?.name}}));
    console.log('***************************');
    console.log(data);
    console.log('***************************');
    
    return data;
  }
  const onDragStart = async(event: React.DragEvent<HTMLDivElement>, nodeInfo: nodeInfo) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeInfo))
    event.dataTransfer.effectAllowed = 'move'
    if(nodeInfo.type === 'default'){
      setLoading(false);
      const data = await fetchData();
      const libs: Array<{name: string}> = JSON.parse(data);
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
