import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
    all: 'unset',
    borderRadius: '4px',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',
    color: '$gray200',

    display: 'flex',
    alignItemsg: 'center',
    justifyContent: 'center',
    gap: '$2',

    cursor: 'pointer',

    svg: {
        width: '$4',
        height: '$4',
    },

    '&:disabled': {
        background: ''
    },

    variants: {
        variant: {
            primary: {
                borderRadius: '8px',
                backgroundColor: '$gray600',
            },
        },

        size: {
            sm: {
                padding: '$2',
                height: '$10',
                width: '$10',

                svg: {
                    height: '$6',
                    width: '$6'
                }
            },

            md: {
                padding: '$5 $6',
                height: '4.5rem',
                width: '23.25rem',

                svg : {
                    height: '$8',
                    width: '$8',
                }
            }
        }
    },

    defaultVariants: {
        variant: "primary",
        size: "sm"
    }
})

export interface ButtonPorps extends ComponentProps<typeof Button> {
    as?: ElementType
}