import React from 'react'

function Features () {
    return(
        <div className="features">
            <p>
                Constructed and imported a JSON file containing properties - id: int, text: string, and completed: boolean - for each todo list item
            </p>
            <p>
                Created a class based component, initialized a class constructor with state property equal to the json object (in this case, an array of 5 objects)
            </p>
            <p>
                Used the array .map method to create a variable containing a ListItem component for each object, passing through state properties and the event handling method
            </p>
            <p>
                When a checkbox is clicked, the Event handler uses the array .map method to cycle through the existing array of todo list items, 
                locate the target of the click, and return a new array with a "switched" boolean for the appropriate object.
            </p>
            <p>
                Lastly, I used conditional rendering add styling to the list item if it was completed.
            </p>
        </div>
    )
}

export default Features;