import { Todo } from '../types'

type props = { todos: Todo[] | null }

const TodoList = ({ todos }: props) => {
  if (!todos) return <p>Congrats! You're done for today.</p>

  const todoItems = todos?.map((todo: Todo) => {
    return <li>{todo.todo}</li>
  })

  return todoItems && <ul>{todoItems}</ul>
}

export default TodoList
