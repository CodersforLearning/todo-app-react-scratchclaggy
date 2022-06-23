import { TodoContext } from '../context'
import { Todo } from '../types'
import { useContext } from 'react'

const TodoList = () => {
  const { todos } = useContext(TodoContext)

  if (!todos) return <p>Congrats! You're done for today.</p>

  const todoItems = todos?.map((todo: Todo) => {
    return <li key={todo.id}>{todo.todo}</li>
  })

  return todoItems && <ul>{todoItems}</ul>
}

export default TodoList
