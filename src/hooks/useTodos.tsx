import { useEffect, useState } from 'react'
import {
  createTodo,
  deleteTodo,
  getTodos,
  toggleCompleted,
  updateTodo
} from '../services/api'
import { FilterValue, TodoType } from '../types'
import { TODO_FILTERS } from '../consts'

export function useTodos() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [todos, setTodos] = useState<TodoType[]>([])
  const [isFetching, setIsFetching] = useState(false)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  useEffect(() => {
    getTodos()
      .then(([err, data]) => {
        if (err != null) {
          setError(err)
          return
        }
        const parsedData = []

        for (let i = data.length - 1; i >= 0; i--) {
          data[i].completed = data[i].completed === 1
          parsedData.push(data[i])
        }

        setTodos(parsedData)
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
    if (isFetching) {
      return
    }

    setIsFetching(true)

    deleteTodo({ id })
      .then(([err]) => {
        if (err != null) {
          setError(err)
          return
        }

        setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
      })
      .finally(() => setIsFetching(false))
  }

  const handleEdit = ({
    id,
    title,
    description
  }: Pick<TodoType, 'id' | 'title' | 'description'>) => {
    if (isFetching) {
      return
    }
    setIsFetching(true)

    updateTodo({ id, title, description })
      .then(([err]) => {
        if (err != null) {
          setError(err)
          return
        }

        setTodos((prevState) =>
          prevState.map((t) => (t.id === id ? { ...t, title, description } : t))
        )
      })
      .finally(() => setIsFetching(false))
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

      setTodos((prevState) => [todo, ...prevState])
    })
  }

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.PENDING) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return {
    todos: filteredTodos,
    error,
    isLoading,
    filterSelected,
    handleToggleCompleted,
    handleDelete,
    handleEdit,
    handleCreate,
    handleFilterChange
  }
}
