import { create } from 'zustand'
import { createTodo, deleteTodo, fetchTodos, markCompleted } from './supabase'
import { Todo } from './types'

interface Store {
  todos: Todo[]
  fetch: () => Promise<void>
  create: (todo: string) => Promise<void>
  markCompleted: (id: string) => Promise<void>
  delete: (id: string) => Promise<void>
}

export const useTodoStore = create<Store>((set) => ({
  todos: [],
  fetch: async () => {
    const todos = await fetchTodos()
    set({ todos })
  },
  create: async (todo: string) => {
    await createTodo(todo)
    const todos = await fetchTodos()
    set({ todos })
  },
  markCompleted: async (id) => {
    await markCompleted(id)
    const todos = await fetchTodos()
    set({ todos })
  },
  delete: async (id) => {
    await deleteTodo(id)
    const todos = await fetchTodos()
    set({ todos })
  },
}))
