import { FileSystemTree } from '@webcontainer/api'

export const files: FileSystemTree = {
  'index.js': {
    file: {
      contents: `
      // 🚀 You can just type \`node index.js\` to start your Vite app with your settings!
      // In order to observe what contents were generated, stop the server with \`ctrl + C\` and type \`ls\` on the terminal.

      // 🧞‍♂️ Psst! here's the full code which is going to be executed in the terminal.

      // *********************************************


      const { execSync } = require('child_process');

      try {
        // 1. Create a Vite project using Vue template
        execSync('pnpm create vite my-vue-app --template vue', { stdio: 'inherit' });

        // Change to the project directory
        process.chdir('my-vue-app');

        // 2. Install @pandacss/dev as a development dependency
        execSync('pnpm install -D @pandacss/dev', { stdio: 'inherit' });

        // 3. Initialize PandaCSS with postcss
        execSync('pnpm panda init --postcss', { stdio: 'inherit' });
        
        console.log('All commands executed successfully.');
        
        execSync('pnpm run dev', { stdio: 'inherit' });
      } catch (error) {
        console.error('An error occurred:', error.message);
      }

      `,
    },
  },
}
