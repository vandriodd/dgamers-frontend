import { useEffect, useState } from 'react'
import {
  createTodo,
  deleteTodo,
  getTodos,
  toggleCompleted,
  updateTodo
} from '../services/api'
import { TodoType } from '../types'

export function useTodos() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [todos, setTodos] = useState<TodoType[]>([])

  useEffect(() => {
    getTodos()
      .then(([err, data]) => {
        if (err != null) {
          setError(err)
          return
        }
        for (let i = 0; i < data.length; i++) {
          if (data[i].completed === 1) {
            data[i].completed = true
          } else {
            data[i].completed = false
          }
        }
        setTodos(data)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const handleToggleCompleted = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => {
    toggleCompleted({ id, completed }).then(([err]) => {
      if (err != null) {
        setError(err)
        return
      }

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed } : todo
        )
      )
    })
  }

  const handleDelete = ({ id }: Pick<TodoType, 'id'>) => {
    deleteTodo({ id }).then(([err]) => {
      if (err != null) {
        setError(err)
        return
      }

      setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
    })
  }

  const handleEdit = ({
    id,
    title,
    description
  }: Pick<TodoType, 'id' | 'title' | 'description'>) => {
    updateTodo({ id, title, description }).then(([err]) => {
      if (err != null) {
        setError(err)
        return
      }

      setTodos((prevState) =>
        prevState.map((t) => (t.id === id ? { ...t, title, description } : t))
      )
    })
  }

  const handleCreate = ({
    title,
    description
  }: Pick<TodoType, 'title' | 'description'>) => {
    createTodo({
      title,
      description
    }).then(([err, todo]) => {
      if (err != null) {
        setError(err)
        return
      }

      setTodos((prevState) => [...prevState, todo])
    })
  }

  return {
    todos,
    error,
    handleToggleCompleted,
    handleDelete,
    handleEdit,
    handleCreate,
    isLoading
  }
}
