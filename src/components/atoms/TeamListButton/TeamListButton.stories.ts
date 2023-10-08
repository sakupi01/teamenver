import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

import { TeamListButton } from './TeamListButton';


const meta = {
  title: 'TeamListButton',
  component: TeamListButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} satisfies Meta<typeof TeamListButton>;


export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};