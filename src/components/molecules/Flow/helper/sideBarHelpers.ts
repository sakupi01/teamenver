import { getCheckedLibraries, WhichLibrary } from '@/services/client/GetCheckedLibraries'

export const fetchData = async (prevCategory: string) => {
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
    const nodes = (await getCheckedLibraries(nextCategory as WhichLibrary))?.data || []
    const data = JSON.stringify({ category: nextCategory, nodes: nodes })
    return data
  } else {
    switch (nextCategory) {
      case 'builder':
        return JSON.stringify({
          category: nextCategory,
          nodes: [{ name: 'vite' }, { name: 'already using different builder' }],
        })
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
      default:
        return JSON.stringify({
          category: nextCategory,
          nodes: [{ name: 'yes' }, { name: 'no' }, { name: 'template' }],
        })
    }
  }
}
