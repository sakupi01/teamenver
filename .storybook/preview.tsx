import React from 'react'
import type { Preview } from '@storybook/react'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import '../src/app/globals.css'
import { handleGetFrameworks } from '../src/services/server/GetFrameworks/__mock__/msw'
import { handleGetProjectOverview } from '../src/services/server/GetOverview/__mock__/msw'
import { handleGetApprovers } from '../src/services/server/GetApprovers/__mock__/msw'
import { UserProvider } from '@auth0/nextjs-auth0/client'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    msw: {
      handlers: [handleGetFrameworks(), handleGetProjectOverview(), handleGetApprovers()],
    },
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/api/auth/logout',
      },
    },
  },
  decorators: [
    (Story) => (
      <UserProvider>
        <Story />
      </UserProvider>
    ),
    mswDecorator,
  ],
}

export default preview

initialize()
