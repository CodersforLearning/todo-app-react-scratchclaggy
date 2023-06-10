import { useTodoStore } from '../store'
import { supabase } from '../supabase'

export const Header = () => {
  const todos = useTodoStore((state) => state.todos)
  const todoCount = todos?.length ?? 0
  const unfinishedCount = todos?.filter((todo) => todo.completed).length ?? 0

  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex items-baseline justify-between">
        <h1 className="text-3xl">Today</h1>

        <button
          className="border-b border-gray-400 text-sm text-gray-300 transition-transform ease-out hover:-translate-y-0.5 "
          onClick={() => supabase.auth.signOut()}
        >
          sign out
        </button>
      </div>
      <div className="flex items-baseline justify-between text-lg text-gray-300">
        <h2>Minimalist Todo</h2>
        {Boolean(todoCount) && (
          <span>{` ( ${unfinishedCount} / ${todoCount} )`}</span>
        )}
      </div>
    </div>
  )
}
