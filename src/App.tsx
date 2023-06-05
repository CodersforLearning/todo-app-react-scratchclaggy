import { Header } from './components/Header'
import TodoCreator from './components/TodoCreator'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="flex h-screen w-screen justify-center overflow-hidden bg-gray-900 text-gray-100">
      <div className="my-4 flex w-full max-w-3xl flex-col gap-y-4 rounded-md p-12">
        <Header />
        <TodoCreator />
        <TodoList />
      </div>
    </div>
  )
}

export default App
