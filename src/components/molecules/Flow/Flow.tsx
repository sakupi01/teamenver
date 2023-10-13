'use client'
import ReactFlow, {
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
} from 'reactflow'

import 'reactflow/dist/style.css'

import { ReturnGetTeamBoardDetailType } from '@/services/server/GetTeamBoardDetail'

import { useReactFlowFunctions } from './hooks'
import { SideBar } from './sidebar'

export type FlowProps = {
  board_detail_id: string
  toFirstOneIndicator: string | null
  isTeamBoard: boolean
  board_detail: ReturnGetTeamBoardDetailType['teamBoardDetailWithoutTypename']
}

const InnerFlow = ({
  board_detail_id,
  toFirstOneIndicator,
  isTeamBoard,
  board_detail,
}: FlowProps) => {
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
  } = useReactFlowFunctions(board_detail, toFirstOneIndicator)

  if (!board_detail) {
    return <p>Error. Team is not properly selected. Go back to /select/team</p>
  }

  return (
    <div className='flex flex-col flex-grow h-screen md:flex-row'>
      <div className={'w-full h-full'} ref={reactFlowWrapper}>
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
      <SideBar
        toFirstOneIndicator={toFirstOneIndicator}
        isTeamBoard={isTeamBoard}
        board_detail_id={board_detail_id}
      />
    </div>
  )
}

export const Flow = ({
  board_detail_id,
  toFirstOneIndicator,
  isTeamBoard,
  board_detail,
}: FlowProps) => {
  return (
    <ReactFlowProvider>
      <InnerFlow
        board_detail_id={board_detail_id}
        toFirstOneIndicator={toFirstOneIndicator}
        isTeamBoard={isTeamBoard}
        board_detail={board_detail}
      />
    </ReactFlowProvider>
  )
}
