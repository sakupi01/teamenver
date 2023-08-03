import type { Preview } from '@storybook/react'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { handleGetLibraries } from '../src/services/client/GetLibraries/__mock__/msw'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    msw: { handlers: [handleGetLibraries()] },
  },
}

export const decorators = [mswDecorator]

export default preview

initialize()
