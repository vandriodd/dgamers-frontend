import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import { TodoType } from '../../types'

interface TodoProps {
  todo: TodoType
  onEdit: (todo: TodoType) => void
  onDelete: (id: TodoType['id']) => void
  onToggle: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo = ({ todo, onEdit, onDelete, onToggle }: TodoProps) => {
  return (
    <div>
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle({ id: todo.id, completed: !todo.completed })}
      />
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
      </div>
      <Button label='edit' onClick={() => onEdit(todo)} />
      <Button label='delete' onClick={() => onDelete(todo.id)} />
    </div>
  )
}

export default Todo
