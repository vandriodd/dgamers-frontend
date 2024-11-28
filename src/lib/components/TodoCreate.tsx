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
  const [titleError, setTitleError] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title.trim()) {
      setTitleError(true)
      return
    }

    setTitleError(false)
    onCreate({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor='title'
          className={`${styles.titleLabel} ${
            titleError ? styles.errorLabel : ''
          }`}
        >
          Título
        </label>
        <InputText
          id='title'
          value={title}
          placeholder='Hacer la tarea...'
          className={`${styles.input} ${titleError ? styles.errorInput : ''}`}
          onChange={(e) => {
            setTitle(e.target.value)
            if (titleError) {
              setTitleError(false)
            }
          }}
        />
        {titleError && (
          <small className={styles.errorText}>
            Por favor, ingrese un título válido.
          </small>
        )}
      </div>
      <div>
        <label htmlFor='description' className={styles.descriptionLabel}>
          Descripción
        </label>
        <InputTextarea
          value={description}
          placeholder='Descripción de la tarea...'
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
        />
      </div>
      <Button
        label=''
        icon='pi pi-plus'
        aria-label='Add-todo'
        className={styles.createBtn}
      />
    </form>
  )
}
