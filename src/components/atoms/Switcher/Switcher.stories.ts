import { Meta, StoryObj } from '@storybook/react'

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
  args: {
    isAgreed: true,
    user: {
      __typename: 'users',
      name: 'hoge',
      id: '0',
    },
  },
}
