import { Meta, StoryObj } from '@storybook/react'

import { ShareLinkButton } from './ShareLinkButton'

const meta = {
  title: 'ShareLinkButton',
  component: ShareLinkButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof ShareLinkButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    current_team_id: '0',
  },
}
