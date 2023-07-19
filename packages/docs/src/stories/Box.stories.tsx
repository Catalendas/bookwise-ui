import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@bookwise-ui/react'

export default {
    title: "Surfaces/Box",
    component: Box,
    args: {
        children: (
            <Text style={{ color: '#fff'}}>Testando componente</Text>
        )
    } 
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}