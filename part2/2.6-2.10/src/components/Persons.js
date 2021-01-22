import React from 'react'

function Persons({ personsToShow }) {
    console.log(personsToShow)
    return (
        <div>
            {personsToShow.map(person => 
                {return(<li key= {person.name}>{person.name} {person.number}</li>)}
            )}
        </div>
    )
}

export default Persons
