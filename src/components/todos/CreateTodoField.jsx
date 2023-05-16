import React, { useState } from 'react'
import Button from '../Items/Button'
import { MdAddBox } from 'react-icons/md'

const CreateTodoField = ({ setTodos }) => {
	const [title, setTitle] = useState('')

	const addTodo = title => {
		setTodos(prev => [
			{
				_id: new Date(),
				title,
				isCompleted: false,
			},
			...prev,
		])
		setTitle('')
	}

	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full'>
			<input
				type='text'
				onChange={e => setTitle(e.target.value)}
				value={title}
				onKeyPress={e => e.key === 'Enter' && addTodo(title)}
				className='bg-transparent w-full border-none outline-none'
				placeholder='Add a task'
			/>
			<Button onClick={() => addTodo(title)} icon={<MdAddBox
					size={27}
					className='text-pink-400 hover:text-grey-600 transition-colors ease-in-out duration-10000'
				/>} />
		</div>
	)
}

export default CreateTodoField
