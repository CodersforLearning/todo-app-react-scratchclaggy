import { PlusIcon } from '@heroicons/react/solid'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTodoStore } from '../store'

type Inputs = {
  todo: string
}

const TodoCreator = () => {
  const create = useTodoStore((state) => state.create)
  const { handleSubmit, register, reset } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = ({ todo }) => {
    create(todo)
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
