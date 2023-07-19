import { styled } from "../../styles";

export const TagContainer = styled('label', {

    '& input[type=radio]': {
        display: 'none'
    }
})

export const TagElement = styled('span', {
    all: 'unset',
    display: 'flex',
    padding: '$1 $4',
    borderRadius: '$full',
    border: '2px solid $purple100',
    cursor: 'pointer',
    
    fontFamily: '$default',
    color: '$purple100',
    transition: '0.5s',

    '&:hover': {
        color: '$gray100',
        backgroundColor: '$purple100',
    },
})