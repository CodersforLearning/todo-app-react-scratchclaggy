import { useForm, SubmitHandler, useWatch } from 'react-hook-form'

type Inputs = {
  todo: string
}

const TodoCreator = () => {
  const { handleSubmit, register } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form className="bg-slate-500" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="p-4 bg-slate-400"
        {...register('todo', {
          required: true,
          maxLength: 128,
        })}
      />
      <input type="submit" />
    </form>
  )
}

export default TodoCreator