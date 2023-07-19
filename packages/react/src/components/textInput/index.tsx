import { MagnifyingGlass } from "phosphor-react";
import { ComponentProps, ReactNode } from "react";
import { TextInputContainer, Input } from "./style";

export interface TextInputProps extends ComponentProps<typeof Input> {
    icon?: ReactNode
}

export function TextInput({icon, ...props}: TextInputProps) {
    return (
            <TextInputContainer>
                <Input {...props}/>
                <MagnifyingGlass />
            </TextInputContainer>
        )
}
