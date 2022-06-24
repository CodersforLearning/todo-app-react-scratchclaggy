import { TodoContext } from '../context'
import { Todo } from '../types'
import { useContext } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { todos } = useContext(TodoContext)

  // Default message
  if (!todos) return <p>Congrats! You're done for today.</p>

  const todoItems = todos?.map((todo: Todo) => {
    return <TodoItem {...todo} />
  })

  return todoItems && <ul>{todoItems}</ul>
}

export default TodoList
