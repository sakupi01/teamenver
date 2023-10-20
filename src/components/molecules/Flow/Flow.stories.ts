import { Meta, StoryObj } from '@storybook/react'

import { Flow } from './Flow'

const meta = {
  title: 'Flow',
  component: Flow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Flow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    board_detail_id: '0',
    toFirstOneIndicator: null,
    isTeamBoard: true,
    board_detail: {},
    team_id: '0',
  },
}
