import { execSync } from 'child_process'
import { access, constants, readFile, writeFile, writeFileSync } from 'fs'
import path from 'path'

import inquirer from 'inquirer'

export const appGenerator = ({
  fw_name,
  css_name,
  ui_name,
  eslint,
  prettier,
  isTs,
  lint_staged_husky,
  hygen,
  vscode,
  volta,
  manager,
}) => {
  try {
    // Create a project and switch to the directory.
    switch (fw_name) {
      case 'vue':
        vueInstall(manager, isTs, eslint, prettier) // eslint option
        break
      case 'react':
        reactInstall(manager, isTs)
        break
      case 'lit':
        litInstall(manager, isTs)
        break
      case 'svelte':
        svelteInstall(manager, isTs)
        break
      case 'solid':
        solidInstall(manager, isTs)
        break
      case 'solid':
        solidInstall(manager, isTs)
        break
      case 'qwik':
        qwikInstall(manager, isTs)
        break
      default:
        console.log(
          `Uh oh. The framework you selected is still not under our support, or incorrect spelling. \\ Try again.`,
        )
    }

    if (eslint === 'template') {
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

      const eslintrcFile = '.eslintrc.json'
      const eslintignoreFile = '.eslintignore'

      // Scafford eslint
      writeFileSync(path.join(process.cwd(), eslintrcFile), eslintrcFileGenerate())

      const eslintingoreFileGenerate = () => ``

      writeFileSync(
        path.join(process.cwd(), eslintignoreFile),
        eslintingoreFileGenerate(),
      )
    } else if (eslint === 'yes') {
      execSync(`${manager} install -D eslint`, { stdio: 'inherit' })
      execSync(`${manager} create @eslint/config`, { stdio: 'inherit' })
      execSync(`${manager} install -D vite-plugin-checker`, { stdio: 'inherit' })
    } else {
      console.log('eslint installation was skipped')
    }

    if (prettier === 'template') {
      execSync(`${manager} install -D prettier`, { stdio: 'inherit' })
      execSync(`${manager} install -D eslint-config-prettier`, { stdio: 'inherit' })
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

      const prettieringoreFileGenerate = () => ``

      writeFileSync(
        path.join(process.cwd(), prettierignoreFile),
        prettieringoreFileGenerate(),
      )
    } else if (prettier === 'yes') {
      execSync(`${manager} install -D prettier eslint-config-prettier`, {
        stdio: 'inherit',
      })
    } else {
      console.log('prettier installation was skipped')
    }

    // css library installation
    if (css_name) {
      switch (css_name) {
        case 'bootstrap':
          bootstrapInstall(manager)
        case 'tailwind':
          tailwindInstall(manager)
        case 'panda':
          pandacssInstall(manager)
        default:
          console.log(`Uh oh. The framework you selected is still not under our support.`)
      }
    } else {
      console.log('css library installation was skipped')
    }

    // ui library installation
    if (ui_name) {
      switch (ui_name) {
        case 'mui':
          muiInstall(manager, fw_name, css_name)
        case 'daisy':
          daisyInstall(manager)
        default:
          console.log(`Uh oh. The framework you selected is still not under our support.`)
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

const generalQuestion = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What do you want to name your app?',
  },
]
// framework
const vueInstall = (manager, isTs, eslint, prettier) => {
  generalQuestion.push({
    type: 'confirm',
    name: 'vite',
    message: 'Do you want to use Vite as a builder?',
  })
  inquirer.prompt(generalQuestion).then((generalAnswers) => {
    console.log('************************')
    console.log(generalAnswers.vite)
    console.log('************************')
    if (generalAnswers.vite) {
      execSync(
        `${manager} create vite@latest ${generalAnswers.projectName} ${
          isTs ? ' --template vue-ts' : ' --template vue'
        } `,
        {
          stdio: 'inherit',
        },
      )
    } else {
      execSync(
        `${manager} create vue@latest ${generalAnswers.projectName} ${
          isTs ? '--typescript' : ''
        } ${eslint && prettier ? '--eslint-with-prettier' : eslint ? '--eslint' : ''} `,
        {
          stdio: 'inherit',
        },
      )
    }
    // Change to the project directory
    process.chdir(generalAnswers.projectName)
    console.log(path.join(process.cwd(), `${generalAnswers.projectName}/`))
  })
  generalQuestion.pop()
  console.log(
    `Installation might not be all set! \n Refer to the official information for more details: https://daisyui.com/docs/install/`,
  )
}

const reactInstall = (manager, isTs) => {
  generalQuestion.push({
    type: 'confirm',
    name: 'vite',
    message: 'Do you want to use Vite as a builder?',
  })
  inquirer.prompt(generalQuestion).then((generalAnswers) => {
    if (generalAnswers.vite) {
      const question = [
        {
          type: 'confirm',
          name: 'swc',
          message: 'Do you want to use SWC as a compiler?',
        },
      ]
      inquirer.prompt(question).then((answer) => {
        execSync(
          `${manager} create vite@latest ${generalAnswers.projectName} ${
            isTs && answer.swc
              ? ' --template react-swc-ts'
              : isTs
              ? ' --template react-ts'
              : answer.swc
              ? ' --template react-swc'
              : ' --template react'
          } `,
          {
            stdio: 'inherit',
          },
        )
      })
    } else {
      execSync(
        `${manager} create-react-app ${generalAnswers.projectName} ${
          isTs ? '--template typescript' : ''
        } `,
        {
          stdio: 'inherit',
        },
      )
    }
    // Change to the project directory
    process.chdir(generalAnswers.projectName)
    console.log(path.join(process.cwd(), `${generalAnswers.projectName}/`))
  })
  generalQuestion.pop()
  console.log(
    `Installation might not be all set! \n Refer to the official information for more details: https://daisyui.com/docs/install/`,
  )
}

const litInstall = (manager, isTs) => {
  generalQuestion.push({
    type: 'confirm',
    name: 'vite',
    message: 'Do you want to use Vite as a builder?',
  })
  inquirer.prompt(generalQuestion).then((generalAnswers) => {
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
        `Our system only supports lit with Vite. \n We're installing the framework with vite anyway. Sorry!`,
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
  })
  generalQuestion.pop()
  console.log(
    `Installation might not be all set! \n Refer to the official information for more details: https://daisyui.com/docs/install/`,
  )
}

const svelteInstall = (manager, isTs) => {
  generalQuestion.push({
    type: 'confirm',
    name: 'vite',
    message: 'Do you want to use Vite as a builder?',
  })
  inquirer.prompt(generalQuestion).then((generalAnswers) => {
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
        `We're sorry that we partially wouldn't use parameters you set before and rely on CLI provided by the framework!`,
      )
      execSync(`${manager} create svelte@latest ${generalAnswers.projectName}`, {
        stdio: 'inherit',
      })
    }
    // Change to the project directory
    process.chdir(generalAnswers.projectName)
    console.log(path.join(process.cwd(), `${generalAnswers.projectName}/`))
  })
  generalQuestion.pop()
  console.log(
    `Installation might not be all set! \n Refer to the official information for more details: https://daisyui.com/docs/install/`,
  )
}

const solidInstall = (manager, isTs) => {
  inquirer.prompt(generalQuestion).then((generalAnswers) => {
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
  })
  console.log(
    `Installation might not be all set! \n Refer to the official information for more details: https://daisyui.com/docs/install/`,
  )
}

const qwikInstall = (manager, isTs) => {
  generalQuestion.push({
    type: 'confirm',
    name: 'vite',
    message: 'Do you want to use Vite as a builder?',
  })
  inquirer.prompt(generalQuestion).then((generalAnswers) => {
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
        `We're sorry that we partially wouldn't use parameters you set before and rely on CLI provided by the framework!`,
      )
      execSync(`${manager} create qwik@latest ${generalAnswers.projectName}`, {
        stdio: 'inherit',
      })
    }
    // Change to the project directory
    process.chdir(generalAnswers.projectName)
    console.log(path.join(process.cwd(), `${generalAnswers.projectName}/`))
  })
  generalQuestion.pop()
  console.log(
    `Installation might not be all set! \n Refer to the official information for more details: https://daisyui.com/docs/install/`,
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
    `Installation might not be all set! \n Refer to the official information for more details: https://panda-css.com/docs/installation/cli`,
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
        execSync(`npx tailwindcss init`, {
          stdio: 'inherit',
        })
      } catch (error) {
        console.log('Installation was not successful.')
        console.log(error)
      }
      console.log(
        `Installation might not be all set! \n Refer to the official information for more details: https://tailwindcss.com/docs/installation`,
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
    `Installation might not be all set! \n Refer to the official information for more details: https://getbootstrap.jp/docs/5.3/getting-started/download/`,
  )
}

// ui
const muiInstall = (manager, fw_name, css_name) => {
  if (fw_name == ('react' || 'next')) {
    try {
      if (css_name == 'styled-components') {
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
      `Installation might not be all set! \n Refer to the official information for more details: https://mui.com/material-ui/getting-started/installation/`,
    )
  } else {
    console.log(
      "You need to use React or it's framework as Mui is peer dependent to react, react-dom.",
    )
  }
}

const daisyInstall = (manager) => {
  const configPath = path.resolve(process.cwd(), 'tailwind.config.js')
  const pluginName = 'daisyui'
  // 既存のコードを読み取る
  readFile(configPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err)
      console.log('You need to install tailwind to use daisyUI')
      return
    } else {
      try {
        execSync(`${manager} i -D daisyui@latest`, {
          stdio: 'inherit',
        })
      } catch (error) {
        console.error('Install was not successful.')
        console.log(error)
      }
      // ファイル内容を JavaScript オブジェクトとして解析
      const configObject = eval(data)

      // plugins プロパティが存在しない場合は新しく作成
      if (!configObject.plugins) {
        configObject.plugins = []
      }

      // 既に追加済みでない場合にプラグインを追加
      if (!configObject.plugins.includes(pluginName)) {
        configObject.plugins.push(pluginName)
      }

      // 変更を加えたオブジェクトを文字列に戻す
      const updatedConfig = `module.exports = ${JSON.stringify(configObject, null, 2)};\n`

      // 変更を保存
      writeFile(configPath, updatedConfig, 'utf-8', (err) => {
        if (err) {
          console.error('Error writing the file:', err)
          return
        }
        console.log('Config file updated successfully.')
      })
    }
  })
  console.log(
    `Installation might not be all set! \n Refer to the official information for more details: https://daisyui.com/docs/install/`,
  )
}

appGenerator({
  fw_name: 'vue',
  ui_name: null,
  css_name: null,
  eslint: 'yes',
  prettier: 'template',
  isTs: true,
  manager: 'pnpm',
  lint_staged_husky: null,
  hygen: null,
  vscode: null,
  volta: null,
})
