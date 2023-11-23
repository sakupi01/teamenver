import { Meta, StoryObj } from '@storybook/react'

import { OverviewPage } from './OverviewPage'

const meta = {
  title: 'OverviewPage',
  component: OverviewPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof OverviewPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
