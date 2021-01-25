import React from 'react'

function Notification({addedPerson}) {
    console.log(addedPerson);
    const notification = `${addedPerson} was added!`
    if(addedPerson !== undefined){
    return (
        <div className="added">
            {notification}
        </div>
    )
    }
    return(<> </>)
}

export default Notification
