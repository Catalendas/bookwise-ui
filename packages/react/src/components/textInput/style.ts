import { styled } from "../../styles";

export const TextInputContainer = styled('div', {
    border: '2px solid $gray500',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',

    '&:has(input:focus)': {
        borderColor: '$gray400', 
    },

    '&:has(input:disabled)': {
        opacity: 0.5,
        cursor: 'not-allowed',
    },

    svg: {
        marginLeft: '$10'
    }
})

export const Input = styled('input', {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray400',
    fontWeight: '$regular',
    background: 'transparent',
    border: 0,
    width: '100%',

    '&:focus': {
        outline: 0,
    },

    '&:disabled': {
        cursor: 'not-allowed',
    },

    '&:placeholder': {
        color: '$gray400'
    }
})