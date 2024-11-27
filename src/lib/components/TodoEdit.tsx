import { InputText } from 'primereact/inputtext'
import { TodoEdit as TodoEditType, TodoType } from '../../types'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import styles from './TodoEdit.module.css'

interface TodoEditProps {
  todo: TodoType
  onEdit: TodoEditType
  handleVisibility: (value?: boolean) => void
}

export default function TodoEdit({
  todo,
  onEdit,
  handleVisibility
}: TodoEditProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const title = formData.get('title') as string
    const description = formData.get('description') as string

    onEdit({ id: todo.id, title, description })

    handleVisibility(false)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputText
        id='title'
        name='title'
        defaultValue={todo.title}
        className={styles.input}
      />
      <InputTextarea
        id='description'
        name='description'
        defaultValue={todo.description}
        className={styles.textarea}
      />
      <Button
        label='Actualizar tarea'
        icon='pi pi-check'
        aria-label='Confirm edit'
      />
    </form>
  )
}
