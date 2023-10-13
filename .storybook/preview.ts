import type { Preview } from '@storybook/react'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import '../src/app/globals.css'
import { handleGetFrameworks } from '../src/services/server/GetFrameworks/__mock__/msw'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    msw: { handlers: [handleGetFrameworks()] },
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/api/auth/logout',
      },
    },
  },
}

export const decorators = [mswDecorator]

export default preview

initialize()
