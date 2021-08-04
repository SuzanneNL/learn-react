import React from 'react';
import ToDoItem from './components/ToDoItem'
import todosData from './components/todosData'

// function ToDoApp () {
// 	const todoItems = todosData.map(item => 
// 		<ToDoItem key={item.id} item={item}
// 		/>)
	
// 		return (
// 			<div className="to-do-list">
// 				{todoItems}
// 			</div>
// 		)
// }

class ToDoApp extends React.Component {
	constructor() {
		super()
		this.state = {
			todos: todosData
		}
	}

	render() {
		const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item}	/>)

		return (
			<div className="to-do-list">
				{todoItems}
			</div>
		)
	}
}

export default ToDoApp