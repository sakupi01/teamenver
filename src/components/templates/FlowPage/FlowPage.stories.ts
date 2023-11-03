import { Meta, StoryObj } from '@storybook/react'

import { FlowPage } from './FlowPage'

const meta = {
  title: 'FlowPage',
  component: FlowPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof FlowPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    team_id: '0',
    board_detail_id: '0',
    prevFirstNullKey: '0',
    teamBoardDetailWithoutTypename: {},
    isAdmin: false,
  },
}
