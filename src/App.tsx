import { Header } from './components/Header'
import TodoCreator from './components/TodoCreator'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="h-screen min-w-fit overflow-hidden bg-gray-900 px-32 py-12">
      <div className="m-auto h-[90%] w-5/6 rounded-md border-2 border-emerald-700 p-12 text-gray-100">
        <Header />
        <div className="m-8 rounded-xl py-8 text-xl">
          <TodoCreator />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App
