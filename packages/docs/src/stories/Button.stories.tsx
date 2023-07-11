import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@bookwise-ui/react'

export default {
    title: 'Form/Button',
    component: Button,

    args: {
        children: "enviar"
    },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    
}

export const big: StoryObj<ButtonProps> = {
    args: {
        size: 'big',
    }
}

export const checkIcon: StoryObj<ButtonProps> ={
    
}