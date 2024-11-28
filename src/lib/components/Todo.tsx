import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import {
  TodoDelete,
  TodoEdit as TodoEditType,
  TodoToggleCompleted,
  TodoType
} from '../../types'
import { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import TodoEdit from './TodoEdit'
import { Card } from 'primereact/card'
import classNames from 'classnames'
import styles from './Todo.module.css'

interface TodoProps {
  todo: TodoType
  onEdit: TodoEditType
  onDelete: TodoDelete
  onToggle: TodoToggleCompleted
}

export default function Todo({ todo, onEdit, onDelete, onToggle }: TodoProps) {
  const [isEditing, setIsEditing] = useState(false)

  const handleVisibility = (value?: boolean) => {
    setIsEditing(value != null ? value : !isEditing)
  }

  const footer = () => (
    <div className={styles.cardFooter}>
      <div className={styles.checkbox}>
        <Checkbox
          inputId={`todo-${todo.id}`}
          checked={!!todo.completed}
          onChange={() => onToggle({ id: todo.id, completed: !todo.completed })}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          data-completed={todo.completed}
          className={styles.labelCompleted}
        >
          Completada
        </label>
      </div>
      <div className={styles.buttons}>
        <Button
          label=''
          icon='pi pi-pencil'
          className='p-button-rounded p-button-text'
          onClick={() => handleVisibility(true)}
        />
        <Button
          label=''
          icon='pi pi-times'
          className='p-button-rounded p-button-text p-button-danger'
          onClick={() => onDelete({ id: todo.id })}
        />
      </div>
    </div>
  )

  const title = () => (
    <h3
      className={classNames(styles.cardTitle, {
        [styles.completed]: todo.completed
      })}
    >
      {todo.title}
    </h3>
  )

  const description = () => (
    <p
      className={classNames(styles.cardDescription, {
        [styles.completed]: todo.completed
      })}
    >
      {todo.description !== null ? todo.description : 'Sin descripción'}
    </p>
  )

  return (
    <section className={styles.cardWrapper}>
      <Card
        className={styles.card}
        title={title}
        subTitle={description}
        footer={footer}
      />
      <Dialog
        header='Editar tarea'
        visible={isEditing}
        onHide={() => handleVisibility(false)}
        className={styles.dialog}
      >
        <TodoEdit
          todo={todo}
          onEdit={onEdit}
          handleVisibility={handleVisibility}
        />
      </Dialog>
    </section>
  )
}
