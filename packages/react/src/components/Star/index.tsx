import { Star } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import { StarContainer } from './styled'

// export interface StarProps extends ComponentProps<typeof Star> {}

export function StarList() {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return (
        <StarContainer>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1
                return (
                    <label>
                        <input 
                            type="radio" 
                            name='rating'
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                        <Star
                            size={50}
                            weight={currentRating <= (rating || hover) ? 'fill' : 'thin'}
                            color="#8381D9"
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                )
            })}
        </StarContainer>
    )
}