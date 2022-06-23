import { TodoContext } from '../context'
import { PlusIcon } from '@heroicons/react/solid'
import { useContext } from 'react'
import { useForm, SubmitHandler, useWatch } from 'react-hook-form'

type Inputs = {
  todo: string
}

const TodoCreator = () => {
  const { dispatchTodos } = useContext(TodoContext)
  const { handleSubmit, register, reset } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatchTodos({ type: 'CREATE', todo: data.todo })
    reset()
  }

  return (
    <div className="rounded-md bg-gray-600 m-8 px-16 py-8">
      <h3 className="py-2">Something you need to do?</h3>
      <form className="flex space-x-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="flex-grow text-gray-700 inline-block p-4 rounded-md bg-gray-400"
          {...register('todo', {
            required: true,
            maxLength: 128,
          })}
        />
        <button
          className="p-4 px-6 bg-emerald-700 rounded-lg w-fit"
          type="submit"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </form>
    </div>
  )
}

export default TodoCreator
