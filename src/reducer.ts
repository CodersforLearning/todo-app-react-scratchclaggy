import { Todo, TodoAction } from './types'
import { v4 as uuid } from 'uuid'

export const TodoReducer = (state: Todo[], action: TodoAction) => {
  window.localStorage.clear()
  let newState = state?.slice()

  switch (action.type) {
    case 'CREATE':
      newState.unshift({ id: uuid(), todo: action.todo, completed: false })
      break
    case 'UPDATE': {
      const index = newState.findIndex((todo) => todo.id === action.id)
      newState[index].todo = action.todo
      break
    }
    case 'SET_COMPLETED': {
      const index = newState.findIndex((todo) => todo.id === action.id)
      newState[index].completed = action.completed
      break
    }
    case 'DELETE':
      newState = newState.filter((todo) => todo.id !== action.id)
      break
  }

  if (newState.length) {
    localStorage.setItem('Today-Storage', JSON.stringify(newState))
  }

  return newState
}
