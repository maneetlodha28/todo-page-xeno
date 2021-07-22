import { useState } from 'react';
import './App.css';
import CompletedList from './Components/completedList';
import SearchBox from './Components/SearchBox/searchBox';
import TodoList from './Components/todoList';
function App() {
	const [ completed, setCompleted ] = useState([
    {
			id: 4,
			title: 'Checkingg 2',
			description: 'Hello world',
			time: 'Tomorrow at 6 PM'
		},
    {
			id: 5,
			title: 'Checkingg 2',
			description: 'Hello world',
			time: 'Tomorrow at 6 PM'
		},
  ]);
	const [ todos, setTodos ] = useState([
		{
			id: 1,
			title: 'Checkingg 1',
			description: 'Hello world dfasflas fslfls f sl fsf',
			time: 'Today at 4:40PM'
		},
		{
			id: 2,
			title: 'Checkingg 2',
			description: 'Hello world',
			time: 'Tomorrow at 6 PM'
		},
		{
			id: 3,
			title: 'Checkingg 3',
			description: 'Hello world',
			time: 'Monday at 5 AM'
		}
	]);
	return (
		<div>
			<nav class="navbar navbar-dark bg-primary" />
			<div class="container my-5">
				<div class="row">
					<div class="col-md">
						<h1>
							<strong>To Do List</strong>
						</h1>{' '}
					</div>
					<div class="col-md text-right">
						<button type="button" class="btn btn-primary">
							Add To Do
						</button>
					</div>
				</div>
        <SearchBox/>

				<TodoList todos={todos} setTodos={setTodos} completed={completed} setCompleted={setCompleted} />
				<div class="border-black border-bottom"style={{color:"black"}} />
				{completed.length?<CompletedList completed={completed} />:null}
			</div>
		</div>
	);
}

export default App;
