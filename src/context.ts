import { TodoReducer } from './reducer'
import { Todo, TodoAction } from './types'
import { createContext, Reducer, useReducer } from 'react'

const TodoContext = createContext<Todo[]>([])
const [state, dispatch] = useReducer<Reducer<Todo[], TodoAction>>(
  TodoReducer,
  []
)

export default TodoContext
