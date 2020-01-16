import React from 'react';
import todosData from './todosData'
import ListItem from './ListItem'

class List extends React.Component {
    render() {
        var todo = todosData.map(item => <ListItem key={item.id} text={item.text} completed={item.completed} />)
        return (
            <div className="todo-list">
                {todo}
            </div>
        )
    }
}

export default List