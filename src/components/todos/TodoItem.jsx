import React from 'react'
import cn from 'classnames'
import { BsTrash } from 'react-icons/bs'
import { FiEdit3 } from 'react-icons/fi'
import Check from '../Items/Check'
import Button from '../Items/Button'


const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
			<button
				className='flex items-center'
				onClick={() => changeTodo(todo.id)}
			>
				<Check isCompleted={todo.isCompleted} />
				<span
					className={cn({
						'line-through': todo.isCompleted,
					})}
				>
					{todo.title}
				</span>
			</button>
			<div className='flex'>
				<Button onClick={() => removeTodo(todo.id)} icon={<FiEdit3
						size={22}
						className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300'
					/>} />
				<Button onClick={() => removeTodo(todo.id)} icon={<BsTrash
						size={22}
						className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300'
					/>} />
			</div>
		</div>
	)
}

export default TodoItem
