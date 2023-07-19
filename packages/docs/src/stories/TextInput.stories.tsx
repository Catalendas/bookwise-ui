import { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@bookwise-ui/react'

export default {
    title: 'Form/ Text Input',
    component: TextInput,
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Texto'
    }
}

export const Secondary: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    }
}

