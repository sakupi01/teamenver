/** @format */

import { execSync } from 'child_process'
import { access, constants, writeFile, writeFileSync } from 'fs'
import path from 'path'

import inquirer from 'inquirer'

const appGenerator = async ({
  framework,
  ui_library,
  css_library,
  linter,
  formatter,
  lint_staged_husky,
  hygen,
  vscode,
  volta,
  manager,
  isGit,
  isTs,
}) => {
  try {
    // Create a project and switch to the directory.
    switch (framework) {
      case 'vue':
        await vueInstall(manager, isTs, linter, formatter) // eslint option
        break
      case 'react':
        await reactInstall(manager, isTs, linter, formatter)
        break
      case 'lit':
        await litInstall(manager, isTs)
        break
      case 'svelte':
        await svelteInstall(manager, isTs)
        break
      case 'solid':
        await solidInstall(manager, isTs)
        break
      case 'qwik':
        await qwikInstall(manager, isTs)
        break
      default:
        console.log(
          'Uh oh. The framework you selected is still not under our support, or incorrect spelling. \\ Try again.',
        )
    }

    // css library installation
    if (css_library) {
      switch (css_library) {
        case 'bootstrap':
          bootstrapInstall(manager)
          break
        case 'tailwind':
          tailwindInstall(manager)
          break
        case 'panda':
          pandacssInstall(manager)
          break
        default:
          console.log('Uh oh. The framework you selected is still not under our support.')
      }
    } else {
      console.log('css library installation was skipped')
    }

    // ui library installation
    if (ui_library) {
      switch (ui_library) {
        case 'mui':
          muiInstall(manager, framework, css_library)
          break
        case 'daisy':
          daisyInstall(manager)
          break
        default:
          console.log('Uh oh. The framework you selected is still not under our support.')
      }
    } else {
      console.log('UI library installation was skipped')
    }

    // Install dependency if needed
    execSync(`${manager} install`, { stdio: 'inherit' })

    // Run and serve
    execSync(`${manager} run dev`, { stdio: 'inherit' })
  } catch (error) {
    console.error('An error occurred:', error.message)
  }
}

function setLinter(manager, linter, customInstallCommands) {
  console.log(linter)
  if (linter === 'template') {
    // when the user wants to install framework-based linter with template
    execSync(`${manager} install -D eslint`, { stdio: 'inherit' })
    customInstallCommands.forEach((customInstallCommand) => {
      execSync(`${manager} ${customInstallCommand}`, {
        stdio: 'inherit',
      })
    })
    execSync(`${manager} install -D eslint-plugin-import eslint-plugin-unused-imports`, {
      stdio: 'inherit',
    })
    const eslintrcFileGenerate = () =>
      `{
        "extends": ["eslint:recommended", "prettier"],
        "plugins": ["import", "unused-imports"],
        "rules": {
            "@typescript-eslint/no-unused-vars": "off",
            "unused-imports/no-unused-imports": "warn",
            "import/order": [
            "warn",
            {
                "groups": [
                "builtin",
                "external",
                "internal",
                "parent",
                "sibling",
                "index",
                "object",
                "type"
                ],
                "newlines-between": "always",
                "pathGroupsExcludedImportTypes": ["builtin"],
                "alphabetize": { "order": "asc", "caseInsensitive": true },
                "pathGroups": [
                ]
            }
            ]
        }
        }`
    const eslintingoreFileGenerate = () => ''

    const eslintrcFile = '.eslintrc.json'
    const eslintignoreFile = '.eslintignore'

    // Scaffold eslint
    writeFileSync(path.join(process.cwd(), eslintrcFile), eslintrcFileGenerate())
    // Scaffold eslintignore
    writeFileSync(path.join(process.cwd(), eslintignoreFile), eslintingoreFileGenerate())
  } else if (linter === 'yes') {
    // when the user only wants to install framework-based linter
    execSync(`${manager} install -D eslint`, { stdio: 'inherit' })
    customInstallCommands.forEach((customInstallCommand) => {
      execSync(`${manager} ${customInstallCommand}`, {
        stdio: 'inherit',
      })
    })
  } else {
    console.log('eslint installation was skipped')
  }
}

function setFormatter(manager, formatter) {
  if (formatter === 'template') {
    execSync(`${manager} install -D prettier`, { stdio: 'inherit' })
    execSync(`${manager} install -D eslint-config-prettier`, {
      stdio: 'inherit',
    })
    const prettierrcFile = '.prettierrc.json'
    const prettierignoreFile = '.prettierignore'

    const prettierrcFileGenerate = () => `
    {
        "plugins": [""],
        "semi": false,
        "singleQuote": true,
        "printWidth": 90,
        "tabWidth": 2,
        "trailingComma": "all",
        "jsxSingleQuote": true
    }
    `
    // Scafford prettier
    writeFileSync(path.join(process.cwd(), prettierrcFile), prettierrcFileGenerate())

    const prettieringoreFileGenerate = () => ''

    writeFileSync(
      path.join(process.cwd(), prettierignoreFile),
      prettieringoreFileGenerate(),
    )
  } else if (formatter === 'yes') {
    execSync(`${manager} install -D prettier eslint-config-prettier`, {
      stdio: 'inherit',
    })
  } else {
    console.log('prettier installation was skipped')
  }
}

const generalQuestion = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What do you want to name your app?',
  },
]
// framework
const vueInstall = async (manager, isTs, linter, formatter) => {
  generalQuestion.push({
    type: 'confirm',
    name: 'vite',
    message: 'Do you want to use Vite as a builder?',
  })

  const generalAnswers = await inquirer.prompt(generalQuestion)

  if (generalAnswers.vite) {
    execSync(
      `${manager} create vite@latest ${generalAnswers.projectName} ${
        isTs ? ' --template vue-ts' : ' --template vue'
      } `,
      {
        stdio: 'inherit',
      },
    )
    console.log(
      'Installation might not be all set! \n Refer to the official information for more details: https://vitejs.dev/guide/',
    )
    process.chdir(`./${generalAnswers.projectName}`)
    setLinter(manager, linter, [
      'add -D eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin',
    ])
    setFormatter(manager, formatter)
  } else {
    execSync(
      `${manager} create vue@latest ${generalAnswers.projectName} ${
        isTs ? '--typescript' : ''
      }`,
      {
        stdio: 'inherit',
      },
    )
    console.log(
      'Installation might not be all set! \n Refer to the official information for more details: https://vuejs.org/guide/quick-start.html',
    )
    process.chdir(`./${generalAnswers.projectName}`)
    setLinter(manager, linter, [
      'add -D eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin',
    ])
    setFormatter(manager, formatter)
  }
  generalQuestion.pop()
}

const reactInstall = async (manager, isTs, linter, formatter) => {
  generalQuestion.push(
    {
      type: 'confirm',
      name: 'vite',
      message: 'Do you want to use Vite as a builder?',
    },
    {
      type: 'confirm',
      name: 'swc',
      message: 'Do you want to use SWC as a compiler?',
    },
  )
  const generalAnswers = await inquirer.prompt(generalQuestion)
  if (generalAnswers.vite) {
    execSync(
      `${manager} create vite@latest ${generalAnswers.projectName} ${
        isTs && generalAnswers.swc
          ? ' --template react-swc-ts'
          : isTs
          ? ' --template react-ts'
          : generalAnswers.swc
          ? ' --template react-swc'
          : ' --template react'
      } `,
      {
        stdio: 'inherit',
      },
    )
    console.log(
      'Installation might not be all set! \n Refer to the official information for more details: https://vitejs.dev/guide/',
    )
    process.chdir(`./${generalAnswers.projectName}`)
    setLinter(manager, linter, ['create @eslint/config'])
    setFormatter(manager, formatter)
  } else {
    execSync(
      `${manager} create-react-app ${generalAnswers.projectName} ${
        isTs ? ' --template typescript' : ''
      } `,
      {
        stdio: 'inherit',
      },
    )
    console.log(
      'Installation might not be all set! \n Refer to the official information for more details: https://react.dev/learn/installation',
    )
    process.chdir(`./${generalAnswers.projectName}`)
    // create-react-app includes eslint and prettier as default
    setFormatter(manager, formatter)
  }
}

const litInstall = async (manager, isTs) => {
  generalQuestion.push({
    type: 'confirm',
    name: 'vite',
    message: 'Do you want to use Vite as a builder?',
  })
  const generalAnswers = await inquirer.prompt(generalQuestion)
  if (generalAnswers.vite) {
    execSync(
      `${manager} create vite@latest ${generalAnswers.projectName} ${
        isTs ? ' --template lit-ts' : '--template lit'
      } `,
      {
        stdio: 'inherit',
      },
    )
  } else {
    console.log(
      "Our system only supports lit with Vite. \n We're installing the framework with vite anyway. Sorry!",
    )
    execSync(
      `${manager} create vite@latest ${generalAnswers.projectName} ${
        isTs ? ' --template lit-ts' : '--template lit'
      } `,
      {
        stdio: 'inherit',
      },
    )
  }
  // Change to the project directory
  process.chdir(generalAnswers.projectName)
  console.log(path.join(process.cwd(), `${generalAnswers.projectName}/`))
  generalQuestion.pop()
  console.log(
    'Installation might not be all set! \n Refer to the official information for more details: https://daisyui.com/docs/install/',
  )
}

const svelteInstall = async (manager, isTs) => {
  generalQuestion.push({
    type: 'confirm',
    name: 'vite',
    message: 'Do you want to use Vite as a builder?',
  })
  const generalAnswers = await inquirer.prompt(generalQuestion)
  if (generalAnswers.vite) {
    execSync(
      `${manager} create vite@latest ${generalAnswers.projectName} ${
        isTs ? ' --template svelte-ts' : ' --template svelte'
      } `,
      {
        stdio: 'inherit',
      },
    )
  } else {
    console.log(
      "We're sorry that we partially wouldn't use parameters you set before and rely on CLI provided by the framework!",
    )
    execSync(`${manager} create svelte@latest ${generalAnswers.projectName}`, {
      stdio: 'inherit',
    })
  }
  // Change to the project directory
  process.chdir(generalAnswers.projectName)
  console.log(path.join(process.cwd(), `${generalAnswers.projectName}/`))
  generalQuestion.pop()
  console.log(
    'Installation might not be all set! \n Refer to the official information for more details: https://daisyui.com/docs/install/',
  )
}

const solidInstall = async (manager, isTs) => {
  const generalAnswers = await inquirer.prompt(generalQuestion)
  execSync(
    `${manager} create vite@latest ${generalAnswers.projectName} ${
      isTs ? '-- --template solid-ts' : '-- --template solid'
    } `,
    {
      stdio: 'inherit',
    },
  )
  // Change to the project directory
  process.chdir(generalAnswers.projectName)
  console.log(path.join(process.cwd(), `${generalAnswers.projectName}/`))
  console.log(
    'Installation might not be all set! \n Refer to the official information for more details: https://daisyui.com/docs/install/',
  )
}

const qwikInstall = async (manager, isTs) => {
  generalQuestion.push({
    type: 'confirm',
    name: 'vite',
    message: 'Do you want to use Vite as a builder?',
  })
  const generalAnswers = await inquirer.prompt(generalQuestion)
  if (generalAnswers.vite) {
    execSync(
      `${manager} create vite@latest ${generalAnswers.projectName} ${
        isTs ? '-- --template qwik-ts' : '-- --template qwik'
      } `,
      {
        stdio: 'inherit',
      },
    )
  } else {
    console.log(
      "We're sorry that we partially wouldn't use parameters you set before and rely on CLI provided by the framework!",
    )
    execSync(`${manager} create qwik@latest ${generalAnswers.projectName}`, {
      stdio: 'inherit',
    })
  }
  // Change to the project directory
  process.chdir(generalAnswers.projectName)
  console.log(path.join(process.cwd(), `${generalAnswers.projectName}/`))
  generalQuestion.pop()
  console.log(
    'Installation might not be all set! \n Refer to the official information for more details: https://daisyui.com/docs/install/',
  )
}

// css
const pandacssInstall = (manager) => {
  try {
    execSync(`${manager} install -D @pandacss/dev`, {
      stdio: 'inherit',
    })
    execSync(`${manager} panda init --postcss`, {
      stdio: 'inherit',
    })
  } catch (error) {
    console.error('Installation was not successful.')
    console.log(error)
  }
  console.log(
    'Installation might not be all set! \n Refer to the official information for more details: https://panda-css.com/docs/installation/cli',
  )
}

const tailwindInstall = (manager) => {
  const configFile = 'tailwind.config.js'

  const filePath = path.join(process.cwd(), configFile)

  access(filePath, constants.F_OK, (err) => {
    if (err) {
      console.log(
        `${configFile} does not exist in the specified directory, so we're installing tailwind`,
      )
      try {
        execSync(`${manager} install -D tailwindcss`, {
          stdio: 'inherit',
        })
        execSync('npx tailwindcss init', {
          stdio: 'inherit',
        })
      } catch (error) {
        console.log('Installation was not successful.')
        console.log(error)
      }
      console.log(
        'Installation might not be all set! \n Refer to the official information for more details: https://tailwindcss.com/docs/installation',
      )
    } else {
      console.log(`${configFile} already exists in the specified directory.`)
    }
  })
}

const bootstrapInstall = (manager) => {
  try {
    execSync(`${manager} i bootstrap`, {
      stdio: 'inherit',
    })
  } catch (error) {
    console.error('Installation was not successful.')
    console.log(error)
  }
  console.log(
    'Installation might not be all set! \n Refer to the official information for more details: https://getbootstrap.jp/docs/5.3/getting-started/download/',
  )
}

// ui
const muiInstall = (manager, framework, css_library) => {
  if (framework == ('react' || 'next')) {
    try {
      if (css_library == 'styled-components') {
        execSync(`${manager} @mui/material @mui/styled-engine-sc styled-components`, {
          stdio: 'inherit',
        })
      } else {
        execSync(`${manager} install @mui/material @emotion/react @emotion/styled`, {
          stdio: 'inherit',
        })
      }
    } catch (error) {
      console.error('Install was not successful.')
      console.log(error)
    }
    console.log(
      'Installation might not be all set! \n Refer to the official information for more details: https://mui.com/material-ui/getting-started/installation/',
    )
  } else {
    console.log(
      "You need to use React or it's framework as Mui is peer dependent to react, react-dom.",
    )
  }
}

const daisyInstall = async (manager) => {
  try {
    const configPath = path.resolve('tailwind.config.js')
    const pluginName = 'daisyui'
    // 既存のコードを読み取る
    try {
      execSync(`${manager} i -D daisyui@latest`, {
        stdio: 'inherit',
      })
    } catch (error) {
      console.error('Install was not successful.')
      console.log(error)
    }
    try {
      // ファイル内容を JavaScript オブジェクトとして解析
      // eslint-disable-next-line no-undef
      const configObject = await require(configPath)
      console.log(configObject.default)
      // 既に追加済みでない場合にプラグインを追加
      if (!configObject.default.plugins.includes(pluginName)) {
        configObject.default.plugins.push(pluginName)
      }

      // 変更を加えたオブジェクトを文字列に戻す
      const updatedConfig = `/** @type {import('tailwindcss').Config} */ \n export default ${JSON.stringify(
        configObject.default,
        null,
        2,
      )};\n`

      // 変更を保存
      writeFile(configPath, updatedConfig, 'utf-8', (err) => {
        if (err) {
          console.error('Error writing the file:', err)
          return
        }
        console.log('Config file updated successfully.')
      })

      console.log(
        'Installation might not be all set! \n Refer to the official information for more details: https://daisyui.com/docs/install/',
      )
    } catch (err) {
      console.error('Something went wrong:', err)
    }
  } catch (err) {
    console.error('Error reading the file:', err)
    console.log('You need to install tailwind to use daisyUI')
    return
  }
}
appGenerator({
  framework: 'react',
  css_library: 'tailwind',
  ui_library: 'panda',
  linter: 'template',
  formatter: 'yes',
  lint_staged_husky: 'yes',
  hygen: 'yes',
  vscode: 'yes',
  volta: 'yes',
  manager: 'pnpm',
  isTs: 'true',
})
