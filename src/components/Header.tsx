import { useTodoStore } from '../store'

export const Header = () => {
  const todos = useTodoStore((state) => state.todos)
  const todoCount = todos.length
  const unfinishedCount = todos.filter((todo) => !todo.completed).length
  const isSomethingTodo = unfinishedCount > 0

  return (
    <span className="m-10 flex flex-row items-baseline space-x-2">
      <h1 className="text-7xl">Today</h1>
      <h2 className="grow text-2xl">Minimalist Todo</h2>
      {isSomethingTodo ? (
        <span>{` ( ${unfinishedCount} / ${todoCount} )`}</span>
      ) : (
        <span>{`( ${todoCount} )`}</span>
      )}
    </span>
  )
}
