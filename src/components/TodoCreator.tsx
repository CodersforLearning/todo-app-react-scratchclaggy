import { TodoContext } from '../context'
import { PlusIcon } from '@heroicons/react/solid'
import { useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

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
    <>
      <h3 className="py-2">Something you need to do?</h3>
      <form className="flex space-x-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="inline-block flex-grow rounded-md bg-gray-400 p-4 text-xl text-gray-700"
          {...register('todo', {
            required: true,
            maxLength: 128,
          })}
        />
        <button
          className="w-fit rounded-lg bg-emerald-700 p-4 px-6"
          type="submit"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </form>
    </>
  )
}

export default TodoCreator
