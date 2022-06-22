export type Todo = {
  id: string
  todo: string
  completed: boolean
}

export type TodoAction =
  | { type: 'CREATE'; todo: string }
  | { type: 'UPDATE'; id: string; todo: string }
  | { type: 'SET_COMPLETED'; id: string; completed: boolean }
  | { type: 'DELETE'; id: string }
