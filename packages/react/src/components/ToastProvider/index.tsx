import * as Toast from '@radix-ui/react-toast'
import { CloseButton, ToastRoot, ToastViewport } from './styles'
import { Heading } from '../Heading'
import { X } from 'phosphor-react'
import { ComponentProps, ReactNode } from 'react'
import { Text } from '../Text'
import { colors } from '@killercf-ui/tokens'

export interface ToastProviderProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
  children: ReactNode
}

export function ToastProvider({
  title,
  description,
  children,
  ...rest
}: ToastProviderProps) {
  return (
    <Toast.Provider swipeDirection="right">
      {children}

      <ToastRoot {...rest}>
        <Toast.Title asChild>
          <Heading size="sm">{title}</Heading>
        </Toast.Title>
        <Toast.Description asChild>
          <Text style={{ color: colors.gray200 }} size="sm">
            {description}
          </Text>
        </Toast.Description>
        <Toast.Action asChild altText="Botão de fechar">
          <CloseButton>
            <X size={20} color={colors.gray200} />
          </CloseButton>
        </Toast.Action>
      </ToastRoot>
      <ToastViewport />
    </Toast.Provider>
  )
}

ToastProvider.displayName = 'ToastProvider'
