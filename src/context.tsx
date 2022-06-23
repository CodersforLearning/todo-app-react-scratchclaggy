import { TodoReducer } from './reducer'
import { Todo, TodoAction } from './types'
import { createContext, Reducer, useReducer } from 'react'
import { v4 as uuid } from 'uuid'

export const TodoContext = createContext<{
  todos: Todo[]
  dispatchTodos: React.Dispatch<TodoAction>
}>({ todos: [], dispatchTodos: () => {} })

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<Todo[], TodoAction>>(
    TodoReducer,
    [
      { id: uuid(), todo: 'Finish this app', completed: false },
      { id: uuid(), todo: 'Setup the repo', completed: true },
    ]
  )
  return (
    <TodoContext.Provider
      value={{
        todos: state,
        dispatchTodos: dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
