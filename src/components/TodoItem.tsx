import { CheckIcon, TrashIcon } from '@heroicons/react/24/solid'
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
      <span className="flex flex-nowrap items-center space-x-2">
        <div
          className={`flex-grow truncate  ${
            todo.completed ? 'text-gray-500 line-through' : 'text-gray-200'
          }`}
        >
          {todo.todo}
        </div>
        {todo.completed || (
          <button
            onClick={handleComplete}
            className="rounded-lg bg-emerald-900 p-2 transition-transform ease-out hover:scale-105 hover:bg-emerald-800"
          >
            <CheckIcon className="h-5 w-5" />
          </button>
        )}
        <button
          onClick={handleDelete}
          className="rounded-lg bg-red-900 p-2 transition-transform ease-out hover:scale-105 hover:bg-red-800"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </span>
    </li>
  )
}

export default TodoItem
