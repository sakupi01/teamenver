import { Meta, StoryObj } from '@storybook/react'

import { NodeContainer } from './NodeContainer';


const meta = {
  title: "NodeContainer",
  component: NodeContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} satisfies Meta<typeof NodeContainer>;


export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
};