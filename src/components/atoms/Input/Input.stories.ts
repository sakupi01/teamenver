import { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'hogehoge',
    defaultValue: 'defaultValue',
  },
}
