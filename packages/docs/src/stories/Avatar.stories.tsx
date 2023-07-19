import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@bookwise-ui/react'

export default {
    title: "Data display/Avatar",
    component: Avatar,
    args: {
        src: 'https://github.com/catalendas.png',
        alt: 'Marcos'
    } 
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
        alt: undefined,
    }
}