import { getCheckedLibraries, WhichLibrary } from '@/services/client/GetCheckedLibraries'
import { getFrameworks } from '@/services/client/GetFrameworks'

const categories = [
  null,
  'framework',
  'css_library',
  'ui_library',
  'linter',
  'formatter',
  'lint_staged_husky',
  'hygen',
  'vscode',
  'volta',
  'manager',
  'isGit',
  'end',
]

export const fetchData = async (
  prevCategory: string | null,
  board_detail_id: string,
  isTeamBoard: boolean,
) => {
  const prevCategoryId = categories.indexOf(prevCategory) // prevCategoryがframeworkの場合はcategoryIdを-1で返させたいため
  const nextCategory = categories[prevCategoryId + 1]

  if (nextCategory == 'framework') {
    // framework
    const sidebarState = await getFrameworks()

    return JSON.stringify({
      category: nextCategory,
      nodes: sidebarState,
    })
  } else if (nextCategory == 'css_library' || nextCategory == 'ui_library') {
    const nodes =
      (
        await getCheckedLibraries(
          nextCategory as WhichLibrary,
          board_detail_id,
          isTeamBoard,
        )
      )?.data || []
    const data = JSON.stringify({ category: nextCategory, nodes: nodes })
    return data
  } else {
    switch (nextCategory) {
      case 'manager':
        return JSON.stringify({
          category: nextCategory,
          nodes: [{ name: 'npm' }, { name: 'yarn' }, { name: 'pnpm' }, { name: 'bun' }],
        })
      case 'isGit':
        return JSON.stringify({
          category: nextCategory,
          nodes: [{ name: 'true' }, { name: 'false' }],
        })
      case 'end':
        return JSON.stringify(null)
      default:
        return JSON.stringify({
          category: nextCategory,
          nodes: [{ name: 'yes' }, { name: 'no' }, { name: 'template' }],
        })
    }
  }
}
