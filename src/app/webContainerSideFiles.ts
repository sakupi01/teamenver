import { FileSystemTree } from '@webcontainer/api'

type fileGeneratorProps = {
  fw_name: string,
  builder: string,
  ui_name:string | null,
  css_name: string | null,
  eslint: 'yes' | 'no' | 'template',
  prettier: 'yes' | 'no' | 'template',
  lint_staged_husky?: 'yes' | 'no' | 'template',
  hygen?: 'yes' | 'no' | 'template',
  vscode?: 'yes' | 'no' | 'template',
  volta?: 'yes' | 'no' | 'template',
  manager: 'npm' | 'yarn' | 'pnpm',
  project_name: string,
  isGit: boolean
}
const fileGenerator = ({fw_name, builder, ui_name, css_name, eslint, prettier, lint_staged_husky, hygen, vscode, volta, manager, project_name, isGit}: fileGeneratorProps) => {
  const md = `
  // 🚀 If you agree with the settings below, just type \`node script.js\` to start your Vite app with your settings.
  // In order to observe what contents were generated, stop the server with \`ctrl + C\` and type \`ls -a\` on the terminal.

  // 🧞‍♂️ Psst! here's the full code which is going to be executed in the terminal.
  // If you want to create your project in your localhost machine, please try the same code away.
  
  // 🐙🐱 For security reason, we're afraid that we cannot execute the git command and connect to your repo on your behalf.
  // You can initialize the local repo and commit the init project on your preferred IDE using the commands generated below.

  // Cheers!

  // *********************************************

  ${manager} create vite my-vue-app --template vue
  ${manager} install -D @pandacss/dev
  ${manager} panda init --postcss
  ${manager} run dev
  ${
    isGit ? 
    `// 🐙🐱 Initialize Github repository *********************************************

  # 1: Initialize the local repository (Please execute only once.)
  git init

  # 2: Staging all changes
  git add .

  # 3: Commit them to the local repository
  git commit -m "Initial commit"

  # 4: Create a remote repository using the name of \`your-repo\`
  
  # 5: Keep in mind to copy the created repo's URL as you'll use it in the next step.
  # The URL must be something like this: \`https://github.com/yourusername/your-repo.git\`

  # 6: Register the remote repository to the local
  git remote add origin https://github.com/yourusername/your-repo.git

  # Push all
  git push -u origin main`
  : ``
  }
  
`

const script = `
  const { execSync } = require('child_process');
  const fs = require('fs');
  const path = require('path');

  try {
    console.log('here');
    
    ${
      // frameworkの部分にインストールコマンドを追加しておき，それでexecSyncする
      builder == 'vite' && fw_name === 'vue' ?
      `
      // Create a ${builder} project using ${fw_name} template
      execSync('${manager} create ${builder} ${project_name} --template vue-ts', { stdio: 'inherit' });
      ` : ``
    }

    // Change to the project directory
    process.chdir('${project_name}');
    console.log(path.join(__dirname, \`${project_name}/\`));

    ${
      eslint === 'template' ? 
      
      `
      const eslintrcFileGenerate = () => \`
      {
        "extends": ["next/core-web-vitals", "prettier"],
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
      }
      \`
      const eslintrcFile = '.eslintrc.json'; 
      const eslintignoreFile = '.eslintignore'; 

      // Scafford eslint
      fs.writeFileSync(path.join(__dirname, \`${project_name}/\`,  eslintrcFile), eslintrcFileGenerate());

      const eslintingoreFileGenerate = () => \`\`
      
      fs.writeFileSync(path.join(__dirname, \`${project_name}/\`, eslintignoreFile), eslintingoreFileGenerate());

      ` : eslint === 'yes' ? `
      execSync('${manager} install -D eslint', { stdio: 'inherit' });
      execSync('${manager} create @eslint/config', { stdio: 'inherit' });
      execSync('${manager} install -D vite-plugin-checker', { stdio: 'inherit' });
      ` : ``
    }
   
    
    ${
      prettier === 'template' ? 
      `
      execSync('${manager} install -D prettier', { stdio: 'inherit' });
      execSync('${manager} install -D eslint-config-prettier', { stdio: 'inherit' });
      console.log(__dirname);
      const prettierrcFile = '.prettierrc.json'; 
      const prettierignoreFile = '.prettierignore'; 

      const prettierrcFileGenerate = () => \`
      {
        "plugins": [""],
        "semi": false,
        "singleQuote": true,
        "printWidth": 90,
        "tabWidth": 2,
        "trailingComma": "all",
        "jsxSingleQuote": true
      }
      \`

      // Scafford prettier
      fs.writeFileSync(path.join(__dirname, \`${project_name}/\`, prettierrcFile), prettierrcFileGenerate());

      const prettieringoreFileGenerate = () => \`\`

      fs.writeFileSync(path.join(__dirname, \`${project_name}/\`, prettierignoreFile), prettieringoreFileGenerate());

      ` : prettier === 'yes' ? `
      execSync('${manager} install -D prettier eslint-config-prettier', { stdio: 'inherit' });
      ` : ``
    }

    ${
      css_name ? `
      // Install ${css_name} as a development dependency
      // execSync('${manager} install -D @pandacss/dev', { stdio: 'inherit' });
      // Initialize ${css_name} with postcss
      // execSync('${manager} panda init --postcss', { stdio: 'inherit' });
  ` : `console.log('css library installation was skipped');`
    }
    
    ${
      ui_name ?  `
      // Install ${ui_name} as a development dependency
      // execSync('${manager} install -D ${ui_name}', { stdio: 'inherit' });
      ` : `console.log('UI library installation was skipped');`
    }
    
    // Install dependency if needed
    execSync('${manager} install', { stdio: 'inherit' });

    execSync('${manager} run dev', { stdio: 'inherit' });
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
`
return {'README.md': {file: { contents: md}} , 'script.js': {file: { contents: script}}}
}

export const files: FileSystemTree = fileGenerator({fw_name: 'vue', builder: 'vite', ui_name: null, css_name: null, eslint: 'yes', prettier: 'template', manager: 'pnpm', project_name: 'testProj', isGit: false})