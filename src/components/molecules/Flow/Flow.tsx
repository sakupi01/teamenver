'use client'
import { useCallback, useRef, useState } from 'react'
import ReactFlow, {
  ReactFlowProvider,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  Connection,
  Edge,
  EdgeChange,
  BackgroundVariant,
  useStoreApi,
  Node,
  useReactFlow,
  getOutgoers,
} from 'reactflow'

import 'reactflow/dist/style.css'

import { nodeInfo } from '@/types/custom/nodeInfo';
import { sidebarData } from '@/types/custom/sidebarData';

import { css } from 'styled-system/css'

import { SideBar } from './sidebar'

export type FlowProps = {
  frameworks: sidebarData
}

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'フレームワークを選択してください' },
    position: { x: 250, y: 5 },
  },
]

const MIN_DISTANCE = 150

let id = 0
const getId = () => `dndnode_${id++}`

const InnerFlow = ({frameworks}: FlowProps) => {
  const store = useStoreApi()
  const reactFlowWrapper = useRef<HTMLInputElement>(null)
  const [nodes, setNodes] = useNodesState(initialElements)
  const [edges, setEdges] = useEdgesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null)
  const { deleteElements } = useReactFlow();

  // When you drag or select a node, the onNodeChange handler gets called.
  // With help of the applyNodeChanges function you can then apply those changes to your current node state.
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  )
  // to manage edge state
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  )

  // to connect nodes manually
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [],
  )

  const onDragOver = useCallback(
    (event: { preventDefault: () => void; dataTransfer: { dropEffect: string } }) => {
      event.preventDefault()
      event.dataTransfer.dropEffect = 'move'
    },
    [],
  )

  const onDrop = useCallback(
    (event: {
      preventDefault: () => void
      dataTransfer: { getData: (arg0: string) => any }
      clientX: number
      clientY: number
    }) => {
      event.preventDefault()
      if (reactFlowWrapper.current == null) {
        return
      }
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
      const data: nodeInfo = JSON.parse(event.dataTransfer.getData('application/reactflow'))

      const type = data.type;
      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: data.label ? data.label : 'N/A'},
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [reactFlowInstance, setNodes],
  )

  const getClosestEdge = useCallback((node: Node) => {
    const { nodeInternals } = store.getState()
    const storeNodes = Array.from(nodeInternals.values())
    interface ClosestNode {
      distance: number
      node: Node
    }
    const closestNode: ClosestNode = storeNodes.reduce(
      (res, n) => {
        if (n.id !== node.id) {
          const dx = n.positionAbsolute!.x - node.positionAbsolute!.x
          const dy = n.positionAbsolute!.y - node.positionAbsolute!.y
          const d = Math.sqrt(dx * dx + dy * dy)

          if (d < res.distance && d < MIN_DISTANCE) {
            res.distance = d
            res.node = n
          }
        }

        return res
      },
      {
        distance: Number.MAX_VALUE,
        node: node,
      },
    )

    if (!closestNode.node) {
      return null
    }

    const closeNodeIsSource =
      closestNode.node.positionAbsolute!.x < node.positionAbsolute!.x

    return {
      id: `${node.id}-${closestNode.node.id}`,
      source: closeNodeIsSource ? closestNode.node.id : node.id,
      target: closeNodeIsSource ? node.id : closestNode.node.id,
      className: '',
    }
  }, [store])

  const onNodeDrag = useCallback(
    (_: React.MouseEvent, node: Node) => {
      const closeEdge = getClosestEdge(node)

      setEdges((es) => {
        const nextEdges = es.filter((e) => e.className !== 'temp')

        if (
          closeEdge &&
          !nextEdges.find(
            (ne) => ne.source === closeEdge.source && ne.target === closeEdge.target,
          )
        ) {
          closeEdge.className = 'temp'
          nextEdges.push(closeEdge)
        }

        return nextEdges
      })
    },
    [getClosestEdge, setEdges],
  )

  const onNodeDragStop = useCallback(
    (_: React.MouseEvent, node: Node) => {
      const closeEdge = getClosestEdge(node)

      setEdges((es) => {
        const nextEdges = es.filter((e) => e.className !== 'temp')

        if (closeEdge) {
          nextEdges.push(closeEdge)
        }

        return nextEdges
      })
    },
    [getClosestEdge, setEdges],
  )

  const onNodesDelete = useCallback(
    (deleted: Node[]) => {
      function removeTreeOfOutgoers(node: Node) {
        const outgoers = getOutgoers(node, nodes, edges);
        console.log(outgoers);
        if (outgoers.length) {
          deleteElements({ nodes: outgoers });
          // we loop through the outgoers and try to remove any outgoers of our outgoers
          outgoers.forEach((outgoer) => {
            removeTreeOfOutgoers(outgoer);
          });
        }
      }
      deleted.forEach((node) => {
        removeTreeOfOutgoers(node);
      });
    },
    [nodes, deleteElements, edges]
  );

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

export const Flow = ({frameworks}: FlowProps ) => {
  return (
    <ReactFlowProvider>
      <InnerFlow frameworks={frameworks}/>
    </ReactFlowProvider>
  )
}
