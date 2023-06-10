import { PlusIcon } from '@heroicons/react/24/solid'
import { ErrorMessage } from '@hookform/error-message'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useCreateTodo } from '../hooks'

type Inputs = {
  todo: string
}

const TodoCreator = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<Inputs>()
  const { mutate: createTodo, isLoading } = useCreateTodo()

  const onSubmit: SubmitHandler<Inputs> = ({ todo }) => {
    createTodo(todo, { onSuccess: () => reset() })
  }

  return (
    <div className="mb-2 space-y-2">
      <h3>Something you need to do?</h3>
      <form className="flex gap-x-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-input flex-grow rounded-md border border-gray-300 bg-gray-800 p-4 text-xl focus:border-gray-300 focus:outline-emerald-700 focus:ring-0"
          {...register('todo', {
            required: true,
            maxLength: { value: 128, message: 'Max length 128 characters' },
          })}
        />
        <button
          className="rounded-lg bg-emerald-700 p-4 px-6 transition-transform ease-out hover:scale-105 hover:bg-emerald-600 active:outline-emerald-700"
          type="submit"
        >
          {isLoading ? (
            <RefreshIcon className="h-5 w-5 animate-spin" />
          ) : (
            <PlusIcon className="h-5 w-5" />
          )}
        </button>
      </form>
      <ErrorMessage
        name="todo"
        errors={errors}
        render={({ message }) => (
          <span className="fixed -mt-1 text-sm text-red-800">{message}</span>
        )}
      />
    </div>
  )
}

export default TodoCreator
