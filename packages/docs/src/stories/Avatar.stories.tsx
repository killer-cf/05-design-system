import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@killercf-ui/react'

export default {
  title: 'Typogra/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/killer-cf.png',
    alt: 'Kilder Costa',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
