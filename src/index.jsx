import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TodoList from './components/todos/TodoList'

ReactDOM.render(
	<React.StrictMode>
      <TodoList/>
	</React.StrictMode>,
	document.getElementById('root')
)
