import { TodoContext } from '../context'
import { Todo } from '../types'
import { useContext } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { todos } = useContext(TodoContext)

  // Default message
  if (!todos.length)
    return (
      <p className="my-2 text-gray-500">Congrats! You're done for today.</p>
    )

  const incomplete = todos?.filter((todo) => !todo.completed)
  const completed = todos?.filter((todo) => todo.completed)

  const todoItems = [...incomplete, ...completed].map((todo: Todo) => {
    return <TodoItem key={todo.id} {...todo} />
  })

  return todoItems && <ul>{todoItems}</ul>
}

export default TodoList
