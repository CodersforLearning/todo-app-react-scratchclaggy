import { Todo } from '../types'
import TodoItem from './TodoItem'
import { useFetchTodos } from '../hooks'

const TodoList = () => {
  const todos = useFetchTodos()

  // Default message
  if (!todos?.length)
    return (
      <p className="my-2 text-gray-500">Congrats! You're done for today.</p>
    )

  const incomplete = todos?.filter((todo) => !todo.completed)
  const completed = todos?.filter((todo) => todo.completed)

  const todoItems = [...incomplete, ...completed].map((todo: Todo) => {
    return <TodoItem key={todo.id} {...todo} />
  })

  return (
    todoItems && (
      <ul className="scrollbar flex flex-col gap-y-2 overflow-y-auto">
        {todoItems}
      </ul>
    )
  )
}

export default TodoList
