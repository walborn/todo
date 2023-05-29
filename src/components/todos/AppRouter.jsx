import { Route, Routes } from 'react-router-dom/dist'
import { Navigate } from 'react-router-dom/dist'
import { BrowserRouter } from 'react-router-dom'
import About from '../pages/About'
import Error from '../pages/Error'
import Login from '../pages/Login'
import Todolist from '../todos/TodoList'
import Home from '../pages/Home'

const AppRouter = () => {

	return (

		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/todolist' element={<Todolist />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<Error />} />
				<Route path='*' element={<Navigate to='/todolist' replace />} />
			</Routes>
		</BrowserRouter>
		/*:
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<Error />} />
				<Route path='*' element={<Navigate to='/login' replace />} />
			</Routes>
		</BrowserRouter>*/
	)
}

export default AppRouter

