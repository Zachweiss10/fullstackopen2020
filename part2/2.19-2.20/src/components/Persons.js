import React from 'react'

function Persons({ personsToShow, deletePerson }) {
    console.log(personsToShow)
    return (
        <div>
            {personsToShow.map(person => 
                {return(
                <li key= {person.name}>{person.name} {person.number}
                <button onClick={ () => deletePerson(person)}> Delete</button></li>
                )}
            )}
            
        </div>
    )
}

export default Persons
