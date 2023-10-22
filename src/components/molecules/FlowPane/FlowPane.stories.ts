import { Meta, StoryObj } from '@storybook/react'

import { FlowPane } from './FlowPane'

const meta = {
  title: 'FlowPane',
  component: FlowPane,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof FlowPane>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
