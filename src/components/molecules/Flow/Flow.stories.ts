import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

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
    frameworks: { category: 'frameworks', nodes: [] },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
  },
}
