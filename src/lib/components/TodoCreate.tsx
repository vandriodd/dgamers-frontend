import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { useState } from 'react'
import styles from './TodoCreate.module.css'
import { TodoCreate as TodoCreateType } from '../../types'

interface TodoCreateProps {
  onCreate: TodoCreateType
}

export default function TodoCreate({ onCreate }: TodoCreateProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onCreate({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputText
        value={title}
        placeholder='Hacer la tarea...'
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputTextarea
        value={description}
        placeholder='Descripción de la tarea...'
        onChange={(e) => setDescription(e.target.value)}
        className={styles.textarea}
      />
      <Button label='Crear tarea' icon='pi pi-plus' aria-label='Add-todo' />
    </form>
  )
}
