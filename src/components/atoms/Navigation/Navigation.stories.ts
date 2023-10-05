import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

import { Navigation } from './Navigation';


const meta = {
  title: 'Navigation',
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} satisfies Meta<typeof Navigation>;


export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};