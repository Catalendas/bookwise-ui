import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@bookwise-ui/react'

export default {
    title: "Typography/Text",
    component: Text,
    args: {
        children: "Exemple text"
    } 
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}