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
    <>
      <div>
        <Checkbox
          checked={todo.completed}
          onChange={() => onToggle({ id: todo.id, completed: !todo.completed })}
        />
        <div>
          <h4>{todo.title}</h4>
          <p>{todo.description}</p>
        </div>
        <Button
          label='Editar'
          icon='pi pi-pencil'
          onClick={() => handleVisibility(true)}
        />
        <Button
          label='Eliminar'
          icon='pi pi-times'
          onClick={() => onDelete({ id: todo.id })}
        />
      </div>
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
    </>
  )
}
