import { colors } from '@bookwise-ui/tokens'
import { getContrast } from 'polished'


export function ColorsGrid() {
    return Object.entries(colors).map(([ key, color ]) => {
        return (
            <div key={key} style={{ background: color, padding: '2rem'}}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        color: '#FFF',
                    }}
                >
                    <strong>${key}</strong>
                    <span>{color}</span>
                </div>
            </div>
        )
    })
}