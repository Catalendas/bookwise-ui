import React from 'react'
import '../styles/tokens-grid.css'

interface TokensGridProps {
    tokens: Record<string, string>
}

export function TokensGrid({ tokens }: TokensGridProps) {
    return (
        <table className="tokens-grid ">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
            </thead>

            <tbody>
                {Object.entries(tokens).map(([key, value]) => {
                    return (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}