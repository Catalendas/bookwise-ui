import { ComponentProps } from "react";
import { styled } from "../styles";

export const Box = styled('div', {
    backgroundColor: '$gray700',
    borderRadius: '$md',
    padding: '$5',
    border: '1px solid $gray500',
})

export type BoxProps = ComponentProps<typeof Box>