import React from 'react'

function Filter({ filter, filterChange}) {
    return (
        <div>
            Filter Shown with: <input value= {filter} onChange={filterChange}/>
        </div>
    )
}

export default Filter
