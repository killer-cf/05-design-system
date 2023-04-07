import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, Text, TooltipProps } from '@killercf-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      const date = new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date())

      return (
        <div style={{ width: '100px' }}>
          <Tooltip text={date}>
            <Text>Data de hoje</Text>
          </Tooltip>
          {Story()}
        </div>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
