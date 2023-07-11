import { ComponentProps } from 'react'
import { styled } from "./styles"

export const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$gray600',
    color: '$gray200',
    borderRadius: '$md',
    padding: '$4',
    border: 'none',


    variants: {
        size: {
            small: {
                padding: '$2',
            },
            big: {
                padding: '$6'

            },
            checked: {
                padding: '$2',
            }
        }
    },

    defaultVariants: {
        size: 'small'
    }
})

export type ButtonProps = ComponentProps<typeof Button>

