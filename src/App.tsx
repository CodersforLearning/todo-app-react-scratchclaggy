import TodoCreator from './components/TodoCreator'
import TodoList from './components/TodoList'
import TodoProvider from './context'
import { Todo } from './types'

const todos: Todo[] | null = [
  { todo: 'Finish this app', completed: false },
  { todo: 'Setup the repo', completed: true },
]

function App() {
  return (
    <TodoProvider>
      <h1>Today</h1>
      <h2>Minimalist Todo</h2>
      <TodoCreator />
      <TodoList />
    </TodoProvider>
  )
}

export default App
