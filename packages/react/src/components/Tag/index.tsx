import { ComponentProps, useState } from "react";
import { TagContainer, TagElement } from './style';

export interface TagProps {
    Text: string
}

export function Tag({Text}: TagProps) {
    const [checked, setChecked] = useState(false)

    function handleChecked() {

        if (checked == true) {
            return setChecked(false)
        }
        
        return setChecked(true)
    }

    return (
        <TagContainer>
            <input 
                type="radio" 
                name="tagControl"
                onClick={() => handleChecked()}
            />
            <TagElement
                css={checked ? {backgroundColor: '$purple100', color: '$gray100'} : {backgroundColor: 'none'}}
            >{Text}</TagElement>
        </TagContainer>
    )
}
