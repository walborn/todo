import React, { useState } from 'react'
import CreateTodoField from './CreateTodoField'
import TodoItem from './TodoItem'

const data = [
	{
		id: 'wefw23',
		title: 'Finish the essay collaboration',
		isCompleted: false,
	},
	{
		id: 'wefw23232',
		title: 'Read next chapter of the book',
		isCompleted: false,
	},
	{
		id: 'wefw2qwefcev3',
		title: 'Send the finished assignment',
		isCompleted: false,
	},
]

const TodoList = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t.id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const removeTodo = id => setTodos([...todos].filter(t => t.id !== id))

	return (
		<div className='py-10 bg-zinc-900'>
			<div className='text-white w-4/5 mx-auto '>
				<h1 className='text-2xl font-bold text-center mb-10'>Today</h1>
				<CreateTodoField setTodos={setTodos} />
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
						changeTodo={changeTodo}
						removeTodo={removeTodo}
					/>
				))}
				<p className='text-gray-500 text-center mb-5'>© 2023 - Angie </p>
			</div>
		</div>
	)
}

export default TodoList
