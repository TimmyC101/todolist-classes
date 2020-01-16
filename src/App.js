import React from 'react';
import './style.css'
import ListItem from './ListItem'
import todosData from './todosData'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      var updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
    // for (var i = 0; i < this.state.todos.length; i++) {
    //   if (this.state.todos[i].id = id) {
    //     if (this.state.todos[i].completed) {
    //       this.setState(this.state.todos[i].completed = false)
    //     }
    //     else {
    //       this.setState(this.state.todos[i].completed = true)
    //     }
    //   }
    // }
    // for this.state.todos.id = id
    // flip this.state.todos.completed
  }

  render() {
    var todo = this.state.todos.map(item => <ListItem 
      key={item.id} 
      id={item.id} 
      text={item.text} 
      completed={item.completed} 
      handleChange={this.handleChange} 
    />)
    return (
        <div className="todo-list">
            {todo}
        </div>
    )
  }
}

export default App;
