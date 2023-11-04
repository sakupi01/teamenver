import { Meta, StoryObj } from '@storybook/react'

import { Selector } from './Selector'

const meta = {
  title: 'Selector',
  component: Selector,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Selector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: '0',
    label: 'hogehoge',
    placeholder: 'fugafuga',
  },
}
