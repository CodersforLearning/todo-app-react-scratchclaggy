import { useTodoStore } from '../store'

export const Header = () => {
  const todos = useTodoStore((state) => state.todos)
  const todoCount = todos.length
  const unfinishedCount = todos.filter((todo) => todo.completed).length

  return (
    <div className="flex flex-col gap-y-1">
      <h1 className="text-3xl">Today</h1>
      <div className="flex items-baseline justify-between text-lg text-gray-300">
        <h2>Minimalist Todo</h2>
        {Boolean(todoCount) && (
          <span>{` ( ${unfinishedCount} / ${todoCount} )`}</span>
        )}
      </div>
    </div>
  )
}
