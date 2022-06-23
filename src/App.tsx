import TodoCreator from './components/TodoCreator'
import TodoList from './components/TodoList'
import TodoProvider from './context'

function App() {
  return (
    <TodoProvider>
      <div className="h-screen  overflow-hidden bg-gray-900 py-12 px-32 min-w-fit">
        <div className="m-auto bg-gray-800 text-gray-100 p-12 rounded-md w-5/6">
          <span className="m-10">
            <h1 className="text-7xl inline">Today</h1>
            <span className="w-2 inline-block" />
            <h2 className="text-2xl  inline">Minimalist Todo</h2>
          </span>
          <TodoCreator />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
