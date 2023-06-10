import { createClient } from '@supabase/supabase-js'
import { Todo } from './types'

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) throw new Error('Missing ENV variables')

export const supabase = createClient(supabaseUrl, supabaseKey)

export const fetchTodos = async () => {
  const res = await supabase.from('todos').select()
  return res.data as Todo[]
}

export const createTodo = async (todo: string) => {
  await supabase.from('todos').insert({ todo }).select()
}

export const markCompleted = async (id: string) => {
  await supabase.from('todos').update({ completed: true }).eq('id', id)
}

export const deleteTodo = async (id: string) => {
  await supabase.from('todos').delete().eq('id', id)
}
