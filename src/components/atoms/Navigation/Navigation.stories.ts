import { Meta, StoryObj } from '@storybook/react'

import { Navigation } from './Navigation'

const meta = {
  title: 'Navigation',
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    current_team_id: '0',
    public_boards_info: undefined,
  },
}
