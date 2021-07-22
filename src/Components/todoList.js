import React, { useCallback } from 'react';
import Dropdown from './dropdown';

const TodoList = ({ todos, setCompleted, completed, setTodos }) => {
	const handleCompleted = useCallback(
		(id) => {
			let newCompleted = todos.find((item) => item.id === id);
			completed.push(newCompleted);
			setCompleted(completed);
			let updatedTodoList = todos.filter((item) => item.id !== id);
			setTodos(updatedTodoList);
		},
		[ completed, setCompleted, setTodos, todos ]
	);
	return (
		<div className="container container-list rounded border ">
			<h5 class="secondary-heading">To Do</h5>
			<div className="py-1 border-black border-bottom" />
			<div className="row py-1" />
			<ul class="list-group">
				{todos.length ? (
					todos.map((item, index) => (
						<div>
							<li key={index} className="list-group-item borderless">
								<input
									class="checkbox"
									id={index}
									type="radio"
									checked={false}
									onClick={() => handleCompleted(item.id)}
								/>
								<span class="title">{item.title}</span>
								<span class="float-right">
									<Dropdown />
								</span>
								<p class="text-muted">
									{item.description}..<a href="/">Read More</a>
								</p>
                                <small class="text-muted time">{item.time}</small>
							</li>
							{index !== todos.length - 1 ? <div class="border-black border-bottom divider" /> : null}
						</div>
					))
				) : (
					<h5 class="text-center">No To Do's</h5>
				)}
			</ul>
		</div>
	);
};

export default TodoList;
