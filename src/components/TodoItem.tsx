import { CheckIcon, TrashIcon } from '@heroicons/react/solid'
import { useTodoStore } from '../store'
import { Todo } from '../types'

const TodoItem = (todo: Todo) => {
  const markComplete = useTodoStore((state) => state.markComplete)
  const deleteTodo = useTodoStore((state) => state.delete)

  const handleComplete = () => {
    markComplete(todo.id)
  }

  const handleDelete = () => {
    deleteTodo(todo.id)
  }

  return (
    <li>
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
