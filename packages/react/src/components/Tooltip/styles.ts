import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const Content = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  padding: '$3 $4',

  p: {
    lineHeight: '$short',
    fontWeight: '$medium',
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
