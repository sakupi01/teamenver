import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

import { Approvers } from './Approvers'

const meta = {
  title: 'Approvers',
  component: Approvers,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Approvers>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
  },
}
