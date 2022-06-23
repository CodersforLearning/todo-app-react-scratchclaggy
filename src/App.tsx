import TodoCreator from './components/TodoCreator'
import TodoList from './components/TodoList'
import TodoProvider from './context'

function App() {
  return (
    <TodoProvider>
      <div className="h-screen min-w-fit overflow-hidden bg-gray-900 py-12 px-32">
        <div className="m-auto w-5/6 rounded-md bg-gray-800 p-12 text-gray-100">
          <span className="m-10">
            <h1 className="inline text-7xl">Today</h1>
            <span className="inline-block w-2" />
            <h2 className="inline text-2xl">Minimalist Todo</h2>
          </span>
          <TodoCreator />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
