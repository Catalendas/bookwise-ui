import { ComponentProps } from "react";
import { styled } from "../styles";

export const Text = styled('p', {
    fontFamily: '$default',
    lineHeight: '$base',
    margin: 0,
    color: '$gray600',

    variants: {
        size: {
            xs: { fontSize: '$xs'},
            sm: { fontSize: '$sm'},
            md: { fontSize: '$md'},
            lg: { fontSize: 'lg'},
            xl: { fontSize: 'xl'},
            '2xl': { fontSize: '$2xl'},
        },
    },

    defaultVariants: {
        size: 'md'
    }
})

export type TextProps = ComponentProps<typeof Text>