import type {
  TodoDelete,
  TodoEdit,
  TodoToggleCompleted,
  TodoType
} from '../../types'
import Todo from './Todo'
import styles from './TodoList.module.css'

interface TodoProps {
  todos: TodoType[]
  onEdit: TodoEdit
  onDelete: TodoDelete
  onToggle: TodoToggleCompleted
}

export default function TodoList({
  onEdit,
  onDelete,
  onToggle,
  todos
}: TodoProps) {
  return (
    <section className={styles.listWrapper}>
      <div>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))
        ) : (
          <p>No hay tareas disponibles</p>
        )}
      </div>
    </section>
  )
}
