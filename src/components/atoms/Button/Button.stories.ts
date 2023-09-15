import { userEvent, waitFor, within } from '@storybook/testing-library'

import { Button } from './Button'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}

export const SucceedToGetData: Story = {
  args: {
    label: 'Fetch!',
  },
  play: async ({ canvasElement }) => {
    // Assigns canvas to the component root element
    const canvas = within(canvasElement)

    await userEvent.click(
      canvas.getByRole('button', { name: SucceedToGetData.args.label }),
    )

    await waitFor(() => canvas.getByText('loading...'))

    // DOM内のテクストノードを受け取り，真偽値を返すマッチャーを渡す
    await waitFor(() => canvas.getByText((text) => text.includes('data')))
  },
}