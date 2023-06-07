import { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { supabase } from './supabase'
import { Todo } from './types'

export const useAuthSession = () => {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => setSession(session))

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) =>
      setSession(session)
    )

    return () => subscription.unsubscribe()
  }, [])

  return session
}

export const useFetchTodos = () => {
  const [todos, setTodos] = useState<Todo[] | undefined>(undefined)

  useEffect(() => {
    supabase
      .from('todos')
      .select()
      .then(({ data }) => setTodos((data as Todo[]) ?? undefined))
  }, [])

  return todos
}
