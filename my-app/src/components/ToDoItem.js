import React from 'react';

function ToDoItem (props) {
	return (
		<div className="to-do-item">
			<input type="checkbox" checked={props.item.completed}/>
			<span>{props.item.text}</span>
		</div>
	)
}

export default ToDoItem