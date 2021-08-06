import React from 'react';

function ToDoItem (props) {
	const  completedStyle = {
		fontStyle: "italic",
		color: "grey",
		textDecoration: "line-through"
	}

	return (
		<div className="to-do-item">
			<input 
				type="checkbox"
				checked={props.item.completed} 
				onChange={() => props.handleChange(props.item.id)}
			/>
			<span style={props.item.completed ? completedStyle : null }>{props.item.text}</span>
		</div>
	)
}

export default ToDoItem