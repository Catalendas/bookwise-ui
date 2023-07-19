import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@bookwise-ui/react'

export default {
    title: "Form/Button",
    component: Button,
    args: {
        children: <span>send</span>
    } 
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonPropps> = {
    args:{
        size: 'md',
    }
}