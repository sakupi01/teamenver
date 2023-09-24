import React, { useState } from 'react'

import { nodeInfo } from '@/types/custom/nodeInfo'
import { sidebarData } from '@/types/custom/sidebarData'

import { getTopics } from '@/services/client/GetTopics'
import { updateBoardDetail } from '@/services/client/UpdateBoardDetail'
import { css } from 'styled-system/css'

import { dndNode } from './dndNode.css'

type SideBarProps = {
  frameworks: sidebarData
}

export const SideBar = ({ frameworks }: SideBarProps) => {
  const [loading, setLoading] = useState(true)
  const [libraries, setLibraries] = useState<sidebarData>(frameworks)
  const fetchData = async (prevCategory: string) => {
    const categories = [
      'framework',
      'css-framework',
      'ui-framework',
      'linter',
      'formatter',
      'lint_staged_husky',
      'hygen',
      'builder',
      'manager',
      'vscode',
      'volta',
      'isGit',
    ]
    const prevCategoryId = categories.indexOf(prevCategory)
    const nextCategory = categories[prevCategoryId + 1]
    const isDataFetchNeeded = categories.slice(0, 3).indexOf(nextCategory) // 0 ~ 2までがデータフェッチが必要
    if (isDataFetchNeeded != -1) {
      const json = await getTopics(nextCategory)
      const nodes = json.topic?.repositories.nodes?.map((node) => {
        return { name: node?.name }
      })
      const data = JSON.stringify({ name: json.topic?.name, nodes: nodes })
      return data
    } else {
      switch (nextCategory) {
        case 'builder':
          return JSON.stringify({
            name: nextCategory,
            nodes: [{ name: 'vite' }, { name: 'already using different builder' }],
          })
        case 'manager':
          return JSON.stringify({
            name: nextCategory,
            nodes: [{ name: 'npm' }, { name: 'yarn' }, { name: 'pnpm' }, { name: 'bun' }],
          })
        case 'isGit':
          return JSON.stringify({
            name: nextCategory,
            nodes: [{ name: 'true' }, { name: 'false' }],
          })
        default:
          return JSON.stringify({
            name: nextCategory,
            nodes: [{ name: 'yes' }, { name: 'no' }, { name: 'template' }],
          })
      }
    }
  }
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
        <p className={css({ color: 'red' })}>Choose how you apply {libraries.name}.</p>
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
                category: libraries.name,
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
