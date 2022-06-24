import { TodoContext } from '../context'
import { useContext } from 'react'
import { TrashIcon, CheckIcon } from '@heroicons/react/solid'
import { Todo } from '../types'

const TodoItem = (todo: Todo) => {
  const { dispatchTodos } = useContext(TodoContext)

  const handleComplete = () => {
    dispatchTodos({ type: 'SET_COMPLETED', id: todo.id, completed: true })
  }

  const handleDelete = () => {
    dispatchTodos({ type: 'DELETE', id: todo.id })
  }

  return (
    <li key={todo.id}>
      <span className="my-2 flex space-x-2 align-middle">
        <span
          className={`flex-grow ${
            todo.completed && 'text-gray-500 line-through'
          }`}
        >{`${todo.todo}`}</span>
        {todo.completed || (
          <button
            onClick={handleComplete}
            className="rounded-lg bg-emerald-900 p-2"
          >
            <CheckIcon className="h-5 w-5" />
          </button>
        )}
        <button onClick={handleDelete} className="rounded-lg bg-red-900 p-2">
          <TrashIcon className="h-5 w-5" />
        </button>
      </span>
    </li>
  )
}

export default TodoItem
