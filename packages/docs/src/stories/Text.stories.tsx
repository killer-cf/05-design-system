import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@killercf-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'exemplo de textto para o storybook',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'strong text',
    as: 'strong',
  },
}
