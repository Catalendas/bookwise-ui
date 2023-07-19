import { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '@bookwise-ui/react'

export default {
    title: 'Form/ Text Area',
    component: TextArea,
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Texto'
    }
}

export const Secondary: StoryObj<TextAreaProps> = {
    args: {
        disabled: true,
    }
}

