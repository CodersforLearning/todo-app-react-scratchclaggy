import { TodoReducer } from './reducer'
import { Todo, TodoAction } from './types'
import { createContext, Reducer, useEffect, useReducer, useState } from 'react'
import { v4 as uuid } from 'uuid'

export const TodoContext = createContext<{
  todos: Todo[]
  dispatchTodos: React.Dispatch<TodoAction>
}>({ todos: [], dispatchTodos: () => {} })

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const initState: Todo[] = JSON.parse(
    localStorage.getItem('Today-Storage') || '[]'
  )
  const [state, dispatch] = useReducer<Reducer<Todo[], TodoAction>>(
    TodoReducer,
    initState
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
