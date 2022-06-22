import { Todo, TodoAction } from './types'
import { v4 as uuid } from 'uuid'

export const TodoReducer = (state: Todo[], action: TodoAction) => {
  const newState = state?.slice()
  switch (action.type) {
    case 'CREATE':
      newState.unshift({ id: uuid(), todo: action.todo, completed: false })
      return newState.unshift({
        id: uuid(),
        todo: action.todo,
        completed: false,
      })
    case 'UPDATE': {
      const index = newState.findIndex((todo) => todo.id === action.id)
      newState[index] = { ...newState[index], todo: action.todo }
      return newState
    }
    case 'SET_COMPLETED': {
      const index = newState.findIndex((todo) => todo.id === action.id)
      newState[index] = { ...newState[index], completed: action.completed }
      return newState
    }
    case 'DELETE':
      return newState.filter((todo) => todo.id !== action.id)
    default:
      return state
  }
}
