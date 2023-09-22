import { AsyncButton } from './AsyncButton'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/AsyncButton',
  component: AsyncButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    // msw: { handlers: [handleGetLibraries({ status: 401, query: 'next' })] },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof AsyncButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    backgroundColor: '#ff0000',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    backgroundColor: '#ff0000',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    backgroundColor: '#ff0000',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    backgroundColor: '#ff0000',
  },
}
