import { FileSystemTree } from '@webcontainer/api'

import { appGeneratorHandler } from '@/libs/actions/appGeneratorHandler'

import { readmeGenerator, readmeGeneratorProps } from './readme'

type appGeneratorProps = {
  fw_name: string
  ui_name: string | null
  css_name: string | null
  eslint: 'yes' | 'no' | 'template'
  prettier: 'yes' | 'no' | 'template'
  isTs: boolean
  lint_staged_husky?: 'yes' | 'no' | 'template'
  hygen?: 'yes' | 'no' | 'template'
  vscode?: 'yes' | 'no' | 'template'
  volta?: 'yes' | 'no' | 'template'
  manager: 'npm' | 'yarn' | 'pnpm' | 'bun'
}

type fileGeneratorProps = appGeneratorProps & readmeGeneratorProps

// evalで実行可能な文字列に変換
function escapeForEval(code: string) {
  console.log('**********')
  console.log(code)
  console.log('**********')

  // JavaScriptコード内のバックスラッシュと引用符をエスケープします
  const escapedCode = code
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')

  return escapedCode
}

const fileGenerator = async ({
  fw_name,
  ui_name,
  css_name,
  eslint,
  prettier,
  isTs,
  lint_staged_husky,
  hygen,
  vscode,
  volta,
  manager,
  isGit,
}: fileGeneratorProps) => {
  const md = `${readmeGenerator({ manager, isGit })}`
  const appGen = `
  ${escapeForEval(await appGeneratorHandler())}
  `
  const shell = `
  #!/bin/jsh

  npm init
  npm install inquirer
  node appGen.mjs
  `

  return {
    'README.md': { file: { contents: md } },
    'appGen.mjs': { file: { contents: appGen } },
    'create.sh': { file: { contents: shell } },
  }
}

// type FileSystemTree cannot operate Promise, so I couldnt able to use 'fs', which means I cannot read the file from out programatically.
export const getFiles = async () => {
  const files: FileSystemTree = await fileGenerator({
    fw_name: 'vue',
    ui_name: null,
    css_name: null,
    eslint: 'yes',
    prettier: 'template',
    isTs: true,
    manager: 'pnpm',
    isGit: false,
  })
  console.log('**********')
  console.log(files)
  console.log('**********')
  return files
}
