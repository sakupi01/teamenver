import { Meta, StoryObj } from '@storybook/react'

import { NavRight } from './NavRight'

const meta = {
  title: 'NavRight',
  component: NavRight,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof NavRight>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    current_team_id: '0',
  },
}
