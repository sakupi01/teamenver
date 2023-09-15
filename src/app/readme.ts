export type readmeGeneratorProps = {
  manager: string
  isGit: boolean
}
export const readmeGenerator = ({ manager, isGit }: readmeGeneratorProps) => {
  return `
  // 🚀 If you agree with the settings below, just type \`./create.sh\`  to start your Vite app with your settings.
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
    isGit
      ? `// 🐙🐱 Initialize Github repository *********************************************

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
  }`
}
