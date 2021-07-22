import React, { useCallback } from 'react';
import Dropdown from './dropdown';

const TodoList = ({ todos, setCompleted, completed, setTodos }) => {
	const handleCompleted = useCallback(
		(id) => {
			let newCompleted = todos.find((item) => item.id === id);
			completed.unshift(newCompleted);
			setCompleted(completed);
			let updatedTodoList = todos.filter((item) => item.id !== id);
			setTodos(updatedTodoList);
		},
		[ completed, setCompleted, setTodos, todos ]
	);
	return (
		<div className="container container-list rounded border ">
			<h5 className="secondary-heading">To Do</h5>
			<div className="py-1 border-black border-bottom" />
			<div className="row py-1" />
			<ul className="list-group">
				{todos.length ? (
					todos.map((item, index) => (
						<div key={index}>
							<li  className="list-group-item borderless">
								<input
									className="checkbox"
									id={index}
									type="radio"
									checked={false}
									onChange={() => handleCompleted(item.id)}
								/>
								<span className="title">{item.title}</span>
								<span className="float-right">
									<Dropdown />
								</span>
								<p className="text-muted">
									{item.description}..<a href="/">Read More</a>
								</p>
								<small className="text-muted time">{item.time}</small>
							</li>
							{index !== todos.length - 1 ? <div className="border-black border-bottom divider" /> : null}
						</div>
					))
				) : (
					<h5 className="text-center">No To Do's</h5>
				)}
			</ul>
		</div>
	);
};

export default TodoList;
