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

  return (
    <section className={styles.cardWrapper}>
      <Card className={styles.card}>
        <div className={styles.goCorner}>
          <div className={styles.goArrow}>→</div>
        </div>

        <h3 className={styles.cardTitle}>{todo.title}</h3>
        <p>{todo.description}</p>

        <div className={styles.cardFooter}>
          <Checkbox
            checked={todo.completed}
            onChange={() =>
              onToggle({ id: todo.id, completed: !todo.completed })
            }
          />
          <span>{todo.completed ? 'Completada' : 'Pendiente'}</span>
        </div>

        <div className={styles.buttons}>
          <Button
            label=''
            icon='pi pi-pencil'
            className='p-button-text'
            onClick={() => handleVisibility(true)}
          />
          <Button
            label=''
            icon='pi pi-times'
            className='p-button-text'
            onClick={() => onDelete({ id: todo.id })}
          />
        </div>
      </Card>
      <Dialog
        header='Editar tarea'
        visible={isEditing}
        style={{ width: '50vw' }}
        onHide={() => {
          handleVisibility(false)
        }}
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
