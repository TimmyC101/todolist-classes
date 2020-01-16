import React from 'react';

function ListItem(props) {

    var styling = {
        fontStyle: "italic",
        color: "grey",
        textDecoration: "line-through"
    }

    return(
        <div className="todo-item" id={props.id}>
            <input 
                type="checkbox" 
                value={props.text} 
                defaultChecked={props.completed} 
                onChange={() => props.handleChange(props.id)}
            />
            <span style={props.completed ? styling : null}>{props.text}</span>
        </div>
    )
}

export default ListItem