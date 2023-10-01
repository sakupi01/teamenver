import type { Preview } from '@storybook/react'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { handleGetNpmLibraries } from '../src/services/client/GetNpmLibraries/__mock__/msw'
import '../src/app/globals.css'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // msw: { handlers: [handleGetNpmLibraries()] },
  },
}

export const decorators = [mswDecorator]

export default preview

initialize()
