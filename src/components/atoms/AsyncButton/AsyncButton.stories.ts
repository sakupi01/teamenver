import { Meta, StoryObj } from '@storybook/react'

import { AsyncButton } from './AsyncButton'

const meta = {
  title: 'AsyncButton',
  component: AsyncButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof AsyncButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Join🚀',
    invitation_id: '0',
    team_id: '0',
  },
}
