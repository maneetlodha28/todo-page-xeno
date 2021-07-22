import { useState } from 'react';
import './App.css';
import CompletedList from './Components/completedList';
import SearchBox from './Components/SearchBox/searchBox';
import TodoList from './Components/todoList';
function App() {
	const [ completed, setCompleted ] = useState([
		{
			id: 4,
			title: 'Task 5',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			time: 'Tomorrow at 6 PM'
		},
		{
			id: 5,
			title: 'Task 4',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			time: 'Tomorrow at 6 PM'
		}
	]);
	const [ todos, setTodos ] = useState([
		{
			id: 1,
			title: 'Task 1',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			time: 'Today at 4:40PM'
		},
		{
			id: 2,
			title: 'Task 2',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			time: 'Tomorrow at 6 PM'
		},
		{
			id: 3,
			title: 'Task 3',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			time: 'Monday at 5 AM'
		}
	]);
	return (
		<div>
			<nav className="navbar navbar-dark bg-primary" />
			<div className="container my-5">
				<div className="row">
					<div className="col-md">
						<h1>
							<strong>To Do List</strong>
						</h1>{' '}
					</div>
					<div className="col-md text-right">
						<button type="button" className="btn btn-primary">
							Add To Do
						</button>
					</div>
				</div>
				<SearchBox />
				<TodoList todos={todos} setTodos={setTodos} completed={completed} setCompleted={setCompleted} />
				<div className="border-black border-bottom" style={{ color: 'black' }} />
				{completed.length ? <CompletedList completed={completed} /> : null}
			</div>
		</div>
	);
}

export default App;
