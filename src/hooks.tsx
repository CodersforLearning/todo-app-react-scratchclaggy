import { Session } from '@supabase/supabase-js'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { supabase } from './supabase'
import { Todo } from './types'

export const useAuthSession = () => {
  return useQuery(['authSession'], async () => {
    const { data, error } = await supabase.auth.getSession()

    if (error) throw error

    return data
  })
}

export const useFetchTodos = () => {
  return useQuery(['todos'], async () => {
    const { data, error } = await supabase.from('todos').select()

    if (error) throw error

    return data as Todo[]
  })
}

export const useCreateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (todo: string) => {
      const { data, error } = await supabase
        .from('todos')
        .insert({ todo: todo })
        .select()

      if (error) throw error

      return data.at(0) as Todo
    },
    onSuccess: (data) => {
      queryClient.setQueryData<Todo[]>(['todos'], (old) => [
        ...(old ?? []),
        data,
      ])
    },
  })
}

export const useMarkComplete = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      const { data, error } = await supabase
        .from('todos')
        .update({ completed: true })
        .eq('id', id)
        .select()

      if (error) throw error

      return data.at(0) as Todo
    },
    onSuccess: (data, id) => {
      queryClient.setQueryData<Todo[]>(['todos'], (old) => [
        ...(old?.filter((todo) => todo.id !== id) ?? []),
        data,
      ])
    },
  })
}

export const useDeleteTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      const { data, error } = await supabase.from('todos').delete().eq('id', id)

      if (error) throw error

      return
    },
    onSuccess: (_data, id) => {
      queryClient.setQueryData<Todo[]>(['todos'], (old) => [
        ...(old?.filter((todo) => todo.id !== id) ?? []),
      ])
    },
  })
}
