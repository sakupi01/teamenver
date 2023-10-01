import { Meta, StoryObj } from '@storybook/react'

import { ChatPage } from './ChatPage'

export type ChatPageProps = {}

const meta = {
  title: 'ChatPage',
  component: ChatPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {},
} satisfies Meta<typeof ChatPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    current_board_id: '',
    accessToken: '',
  },
}
