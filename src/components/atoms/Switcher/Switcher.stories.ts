import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

import { Switcher } from './Switcher'

const meta = {
  title: 'Switcher',
  component: Switcher,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Switcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
  },
}
