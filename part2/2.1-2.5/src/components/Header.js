import React from 'react'

function Header({ course }) {
    return (
        <div>
            <h3>{course.name}</h3>
        </div>
    )
}

export default Header

