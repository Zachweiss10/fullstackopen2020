import React from 'react'

function Form({addName, newName, handleChange, newNumber, handleNumberChange}) {
    return (
        <form onSubmit={addName}>
            <div>name: <input value= {newName} onChange={handleChange}/></div>
            <div>number: <input value = {newNumber} onChange={handleNumberChange}/></div>
            <div><button type="submit">add</button></div>
        </form>

    )
}

export default Form
