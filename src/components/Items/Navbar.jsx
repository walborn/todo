import React from 'react'
import { MdExitToApp } from 'react-icons/md'
import Button from './Button'

const Navbar = () => {
	return (
		<div className='flex place-content-between mb-10'>
			<div></div>
			<h1 className='text-2xl font-bold text-center'>Today</h1>
			<div className='flex items-center'>
				<Button icon={<MdExitToApp
					size={25}
					className='text-pink-400'
				/>} />
			</div>
		</div>
	)
}

export default Navbar
