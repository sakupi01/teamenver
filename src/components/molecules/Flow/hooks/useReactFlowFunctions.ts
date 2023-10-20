import { useCallback, useRef, useState } from 'react'
import {
  useNodesState,
  useEdgesState,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  Connection,
  Edge,
  EdgeChange,
  useStoreApi,
  useReactFlow,
  getOutgoers,
  Node,
} from 'reactflow'

import 'reactflow/dist/style.css'

import { nodeInfo } from '@/types/custom/nodeInfo'

import { deleteBoardDetail } from '@/services/client/DeleteBoardDetail'
import { ReturnGetTeamBoardDetailType } from '@/services/server/GetTeamBoardDetail'

import { idFactoryInstance, useNodeInit } from './useNodeInit'

const MIN_DISTANCE = 150

export const useReactFlowFunctions = (
  initialNodes: ReturnGetTeamBoardDetailType['teamBoardDetailWithoutTypename'],
  toFirstOneIndicator: string | null,
  isTeamBoard: boolean,
) => {
  const { initializedEdges, initializedNodes } = useNodeInit(
    initialNodes,
    toFirstOneIndicator,
  )
  const store = useStoreApi()
  const reactFlowWrapper = useRef<HTMLInputElement>(null)
  const [nodes, setNodes] = useNodesState(initializedNodes)
  const [edges, setEdges] = useEdgesState(initializedEdges)
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null)
  const [deleteOne, setDeleteOne] = useState(false)
  const { deleteElements } = useReactFlow()

  // When you drag or select a node, the onNodeChange handler gets called.
  // With help of the applyNodeChanges function you can then apply those changes to your current node state.
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes((nds) => applyNodeChanges(changes, nds))
    },
    [setNodes],
  )
  // to manage edge state
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdges((eds) => applyEdgeChanges(changes, eds))
    },
    [setEdges],
  )

  const onConnect = useCallback(
    async (params: Edge | Connection) => {
      setEdges((eds) => addEdge(params, eds))
    },
    [setEdges],
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
      const data: nodeInfo = JSON.parse(
        event.dataTransfer.getData('application/reactflow'),
      )

      const type = data.type
      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })
      const newNode = {
        id: idFactoryInstance.getId(),
        type,
        position,
        data: {
          key: data.key ? data.key : 'N/A',
          label: data.label ? data.label : 'N/A',
        },
      }

      setNodes((nds) => nds.concat(newNode))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reactFlowInstance],
  )

  interface ClosestNode {
    distance: number
    node: Node
  }
  const getClosestEdge = useCallback(
    (node: { id: string; positionAbsolute: { x: number; y: number } }) => {
      const { nodeInternals } = store.getState()
      const storeNodes = Array.from(nodeInternals.values())

      const closestNode: ClosestNode = storeNodes.reduce(
        (res, n) => {
          if (n.id !== node.id) {
            const dx = n.positionAbsolute!.x - node.positionAbsolute.x
            const dy = n.positionAbsolute!.y - node.positionAbsolute.y
            const d = Math.sqrt(dx * dx + dy * dy)

            if (d < res.distance && d < MIN_DISTANCE) {
              res.distance = d
              // @ts-ignore
              res.node = n
            }
          }
          return res
        },
        {
          distance: Number.MAX_VALUE,
          node: null as any as ClosestNode['node'],
        },
      )

      if (!closestNode.node) {
        return null
      }

      const closeNodeIsSource = // @ts-ignore
        closestNode.node.positionAbsolute!.x < node.positionAbsolute.x

      return {
        // @ts-ignore
        id: `${node.id}-${closestNode.node.id}`, // @ts-ignore
        source: closeNodeIsSource ? closestNode.node.id : node.id, // @ts-ignore
        target: closeNodeIsSource ? node.id : closestNode.node.id,
        className: '',
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const onNodeDrag = useCallback(
    (_: any, node: any) => {
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
    (_: any, node: any) => {
      const closeEdge = getClosestEdge(node)

      setEdges((es) => {
        const nextEdges = es.filter((e) => e.className !== 'temp')

        if (closeEdge) {
          nextEdges.push(closeEdge)
        }

        return nextEdges
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getClosestEdge],
  )

  const onNodesDelete = useCallback(
    (deleted: Node<any, string | undefined>[]) => {
      if (!deleteOne) {
        deleteBoardDetail(deleted[0].data.key, isTeamBoard)
        console.log('setDeleteOne(true)')
        setDeleteOne(true)
      }
      function removeTreeOfOutgoers(node: Node) {
        const outgoers = getOutgoers(node, nodes, edges)
        if (outgoers.length) {
          deleteElements({ nodes: outgoers })
          // we loop through the outgoers and try to remove any outgoers of our outgoers
          outgoers.forEach((outgoer) => {
            removeTreeOfOutgoers(outgoer)
          })
        }
      }

      deleted.forEach((node) => {
        removeTreeOfOutgoers(node)
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nodes, deleteElements, edges],
  )

  return {
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
  }
}
