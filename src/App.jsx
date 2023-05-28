import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from 'react-router-dom/dist'
import About from './components/pages/About'
import Navbar from './components/Items/Navbar'
import Error from './components/pages/Error'
import Login from './components/pages/Login'
import Todolist from './components/todos/TodoList'


const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/todolist" element={<Todolist />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App