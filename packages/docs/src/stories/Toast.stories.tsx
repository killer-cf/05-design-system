import type { Meta, StoryObj } from '@storybook/react'
import { ToastProvider, ToastProviderProps, Button } from '@killercf-ui/react'
import React from 'react'

export default {
  title: 'Surfaces/ToastProvider',
  component: ToastProvider,
  args: {},
  decorators: [
    () => {
      const [open, setOpen] = React.useState(false)

      return (
        <div style={{ height: '300px', width: '100%' }}>
          <ToastProvider
            title="Toast Information"
            description="description do toast"
            open={open}
            onOpenChange={setOpen}
          >
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                setOpen(false)
                setOpen(true)
              }}
            >
              Add to calendar
            </Button>
          </ToastProvider>
        </div>
      )
    },
  ],
} as Meta<ToastProviderProps>

export const Primary: StoryObj<ToastProviderProps> = {
  parameters: {
    description: {
      story:
        'Esse componente recebe 4 parametros obrigatorios. title, description, open={open} open sendo um estado, onOpenChange ={setOpen}. O children deve ter uma ação com setOpen=false e tbm setOpen=true',
    },
  },
}
