import { Auth } from '@supabase/auth-ui-react'
import { useEffect } from 'react'
import { Header } from './components/Header'
import TodoCreator from './components/TodoCreator'
import TodoList from './components/TodoList'
import { useAuthSession } from './hooks'
import { useTodoStore } from './store'
import { supabase } from './supabase'

function App() {
  const session = useAuthSession()
  const fetchTodos = useTodoStore((state) => state.fetch)

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className="flex h-screen w-screen justify-center overflow-hidden bg-gray-900 text-gray-100">
      {session ? (
        <div className="my-4 flex w-full max-w-3xl flex-col gap-y-4 rounded-md p-12">
          <Header />
          <TodoCreator />
          <TodoList />
        </div>
      ) : (
        <div className="flex h-screen items-center">
          <Auth
            supabaseClient={supabase}
            providers={['github']}
            onlyThirdPartyProviders
          />
        </div>
      )}
    </div>
  )
}

export default App
