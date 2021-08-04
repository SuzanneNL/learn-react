import React from 'react';
import ToDoItem from './components/ToDoItem'
import todosData from './components/todosData'

class ToDoApp extends React.Component {
	constructor() {
		super()
		this.state = {
			todos: todosData
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(id) {
		this.setState(prevState => {
			const upgradedTodos = prevState.todos.map(todo => {
				if (todo.id == id) {
					todo.completed = !todo.completed
				}
				return todo
			})
			return {
				todos: upgradedTodos
			}
		})
    }

	render() {
		const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item}
			handleChange={this.handleChange}	/>)

		return (
			<div className="to-do-list">
				{todoItems}
			</div>
		)
	}
}

export default ToDoApp