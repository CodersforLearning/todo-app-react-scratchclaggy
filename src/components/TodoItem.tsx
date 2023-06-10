import { CheckIcon, TrashIcon, ArrowPathIcon } from '@heroicons/react/24/solid'
import { useDeleteTodo, useMarkComplete } from '../hooks'
import { Todo } from '../types'

const TodoItem = (todo: Todo) => {
  const { mutate: markComplete, isLoading: isLoadingMarkComplete } =
    useMarkComplete()
  const { mutate: deleteTodo, isLoading: isLoadingDelete } = useDeleteTodo()
  const isLoading = isLoadingMarkComplete || isLoadingDelete

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
            className="rounded-lg bg-emerald-900 p-2 transition-transform ease-out hover:scale-105 hover:bg-emerald-800"
            disabled={isLoading}
            onClick={() => markComplete(todo.id)}
          >
            {isLoadingMarkComplete ? (
              <ArrowPathIcon className="h-5 w-5 animate-spin" />
            ) : (
              <CheckIcon className="h-5 w-5" />
            )}
          </button>
        )}
        <button
          className="rounded-lg bg-red-900 p-2 transition-transform ease-out hover:scale-105 hover:bg-red-800"
          disabled={isLoading}
          onClick={() => deleteTodo(todo.id)}
        >
          {isLoadingDelete ? (
            <ArrowPathIcon className="h-5 w-5 animate-spin" />
          ) : (
            <TrashIcon className="h-5 w-5" />
          )}
        </button>
      </span>
    </li>
  )
}

export default TodoItem
