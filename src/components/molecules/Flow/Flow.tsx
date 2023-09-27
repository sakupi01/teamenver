'use client'
import ReactFlow, {
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
} from 'reactflow'

import 'reactflow/dist/style.css'

import { sidebarData } from '@/types/custom/sidebarData'

import { css } from 'styled-system/css'

import { useReactFlowFunctions } from './hooks'
import { SideBar } from './sidebar'

export type FlowProps = {
  frameworks: sidebarData
}

const InnerFlow = ({ frameworks }: FlowProps) => {
  const {
    nodes,
    edges,
    reactFlowWrapper,
    setReactFlowInstance,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onDragOver,
    onDrop,
    onNodeDrag,
    onNodeDragStop,
    onNodesDelete,
  } = useReactFlowFunctions()

  return (
    <div
      className={css({
        flexDirection: 'column',
        display: 'flex',
        flexGrow: '1',
        height: '100%',
        md: {
          flexDirection: 'row',
        },
      })}
    >
      <div className={css({ width: '100vw', height: '100vh' })} ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeDrag={onNodeDrag}
          onNodeDragStop={onNodeDragStop}
          onNodesDelete={onNodesDelete}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </div>
      <SideBar frameworks={frameworks} />
    </div>
  )
}

export const Flow = ({ frameworks }: FlowProps) => {
  return (
    <ReactFlowProvider>
      <InnerFlow frameworks={frameworks} />
    </ReactFlowProvider>
  )
}
