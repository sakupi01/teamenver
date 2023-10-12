import { ReturnGetTeamBoardDetailType } from '@/services/server/GetTeamBoardDetail'

const initialElement = [
  {
    id: 'dndnode_0',
    type: 'input',
    data: { label: 'フレームワークを選択してください' },
    position: { x: 250, y: 5 },
    deletable: false,
  },
]

let id = 1
class idFactory {
  constructor() {
    id = 1
  }
  getId() {
    return `dndnode_${id++}`
  }
}

export const idFactoryInstance = new idFactory()

export const useNodeInit = (
  initialNodes: ReturnGetTeamBoardDetailType['teamBoardDetailWithoutTypename'],
  firstOneIndicator: string | null,
) => {
  const initialNodesValues = Object.values(initialNodes)
  const initialNodesKeys = Object.keys(initialNodes)

  if (!initialNodes) {
    return {
      initializedEdges: [],
      initializedNodes: initialElement,
    }
  }

  const initializedNodes =
    firstOneIndicator !== null
      ? initialNodesValues
          .slice(0, initialNodesKeys.indexOf(firstOneIndicator) + 1)
          .map((node) => {
            return {
              id: idFactoryInstance.getId(),
              type: 'default',
              data: { label: node },
              position: { x: 250 + 20 * id, y: 5 + 50 * id },
              deletable: true,
            }
          })
      : []

  const initializedEdges =
    firstOneIndicator !== null
      ? initialNodesValues
          .slice(0, initialNodesKeys.indexOf(firstOneIndicator) + 1)
          .map((node, index) => {
            return {
              id: `edge_${index}`,
              source: `dndnode_${index}`,
              target: `dndnode_${index + 1}`,
              className: '',
            }
          })
      : []

  return {
    initializedEdges: initializedEdges,
    initializedNodes: initialElement.concat(initializedNodes),
  }
}
