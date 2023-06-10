import { Auth } from '@supabase/auth-ui-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Header } from './components/Header'
import TodoCreator from './components/TodoCreator'
import TodoList from './components/TodoList'
import { useAuthSession } from './hooks'
import { supabase } from './supabase'

const App = () => {
  const { data: session, isError, isLoading } = useAuthSession()

  if (isLoading) {
    return <div className="flex h-screen items-center">loading...</div>
  }

  if (isError) {
    return (
      <div className="flex h-screen items-center">
        Uh oh, encountered some error...
      </div>
    )
  }

  return session ? (
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
  )
}

const AppWithQueryContext = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen w-screen justify-center overflow-hidden bg-gray-900 text-gray-100">
        <App />
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  )
}

export default AppWithQueryContext
