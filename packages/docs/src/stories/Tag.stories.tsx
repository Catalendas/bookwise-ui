import { StoryObj, Meta } from '@storybook/react'
import { Tag, TagProps } from '@bookwise-ui/react'

export default {
    title: "Data display/Tag",
    component: Tag,
    args: {
        Text: 'Tudo'
    }
} as Meta<TagProps>

export const Primary: StoryObj<TagProps> = {}
