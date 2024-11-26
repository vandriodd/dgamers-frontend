import { useEffect, useState } from 'react'
import type { TodoType } from '../../types'
import Todo from './Todo'

export default function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('http://localhost:5173/todos.json')
      const data = await response.json()
      setTodos(data)
    }

    fetchTodos()
  }, [])

  const handleToggleCompleted = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => {
    const updatedTodos = todos.map((todo: TodoType) =>
      todo.id === id ? { ...todo, completed } : todo
    )

    setTodos(updatedTodos)
  }

  const handleDelete = (id: TodoType['id']) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)

    setTodos(updatedTodos)
  }

  const handleEdit = (todo: TodoType) => {
    console.log('Editando tarea...', todo)
  }

  return (
    <section>
      <h2>Lista de Tareas</h2>

      <div>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggle={handleToggleCompleted}
            />
          ))
        ) : (
          <p>No hay tareas disponibles</p>
        )}
      </div>
    </section>
  )
}
