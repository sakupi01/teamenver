// npm run new:sfc -- --tag=p

module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: '🚀 Which Atomic Element?',
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
      },
      {
        type: 'input',
        name: 'component_name',
        message: '❤️ What is the name of component?',
      },
      {
        type: 'confirm',
        name: 'have_style',
        message: '🌼 Does it have styled-component?',
      },
      {
        type: 'confirm',
        name: 'have_props',
        message: '🦸Does it have props?',
      },
      {
        type: 'confirm',
        name: 'have_hooks',
        message: '💉 Does it have hooks?',
      },
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { category, component_name, have_props } = answers
      const path = `${category}/${component_name}`
      const abs_path = `src/components/${path}`
      const props = have_props ? '(props)' : '()'
      return {
        ...answers,
        path,
        abs_path,
        props,
      }
    })
  },
}
