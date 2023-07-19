import { ComponentProps } from "react";
import { styled } from "../styles";

export const TextArea = styled('textarea', {
    border: '2px solid $gray500',
    boxSizing: 'border-box',
    padding: '$3 $4',
    borderRadius: '$sm',

    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray400',
    fontWeight: '$regular',
    resize: 'vertical',
    minHeight: 80,

    '&:focus': {
        outline: 0,
        borderColor: '$gray400', 
    },

    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
    },

    '&:placeholder': {
        color: '$gray400',
    },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
