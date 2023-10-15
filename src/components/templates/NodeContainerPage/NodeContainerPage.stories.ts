import { Meta, StoryObj } from '@storybook/react'

import { NodeContainerPage } from './NodeContainerPage'

const meta = {
  title: 'NodeContainerPage',
  component: NodeContainerPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof NodeContainerPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    teamBoardDetailWithoutTypename: {},
  },
}
