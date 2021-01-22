import React from 'react'

function Content({ parts }) {
    //console.log(parts)
    const total = parts.reduce((s, p) => {return s + p.exercises}, 0)
    console.log(total)
    return (
        <div>
            {parts.map(part => 
                <p key = {part.id}>{part.name} {part.exercises}</p>
            )}
            <strong>Total of {total} exercises</strong>
        </div>
    )
}

export default Content
