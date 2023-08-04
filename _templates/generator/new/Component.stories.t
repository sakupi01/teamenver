---
to: <%= abs_path %>/<%= component_name %>.stories.ts
---
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

import { <%= component_name %> } from './<%= component_name %>';

<% if (have_props) { -%>
export type <%= component_name %>Props = {};
<% } -%>

const meta = {
  title: "<%= component_name %>",
  component: <%= component_name %>,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} satisfies Meta<typeof <%= component_name %>>;


export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};