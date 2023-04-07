import * as TooltipR from '@radix-ui/react-tooltip'
import { Content, TooltipArrow } from './styles'
import { ComponentProps, ReactNode } from 'react'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof Content> {
  children: ReactNode
  text: string
}

export function Tooltip({ children, text }: TooltipProps) {
  return (
    <TooltipR.Provider>
      <TooltipR.Root>
        <TooltipR.Trigger asChild>
          <div>{children}</div>
        </TooltipR.Trigger>
        <TooltipR.Portal>
          <Content sideOffset={2}>
            <Text size="sm">{text}</Text>
            <TooltipArrow />
          </Content>
        </TooltipR.Portal>
      </TooltipR.Root>
    </TooltipR.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
