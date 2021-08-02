import React from 'react';
import ToDoItem from './components/ToDoItem'

function ToDoApp () {
	return (
		<div className="to-do-list">
			<ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
		</div>
	)
}

export default ToDoApp