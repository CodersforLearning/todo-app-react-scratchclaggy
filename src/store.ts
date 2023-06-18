import { v4 as uuid } from 'uuid'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Todo } from './types'

interface Store {
  todos: Todo[]
  create: (todo: string) => void
  markComplete: (id: string) => void
  delete: (id: string) => void
}

export const useTodoStore = create(
  persist<Store>(
    (set, get) => ({
      todos: [],
      create: (todo) =>
        set({
          todos: [{ id: uuid(), todo, completed: false }].concat(get().todos),
        }),
      markComplete: (id) =>
        set({
          todos: get().todos.map((todo) =>
            todo.id === id ? { ...todo, completed: true } : todo
          ),
        }),
      delete: (id) =>
        set({
          todos: get().todos.filter((todo) => todo.id !== id),
        }),
    }),
    { name: 'todo-store' }
  )
)
