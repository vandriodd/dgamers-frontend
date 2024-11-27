import TodoList from './lib/components/TodoList'
import TodoCreate from './lib/components/TodoCreate'
import { useEffect, useState } from 'react'
import './App.css'
import { TodoType } from './types'

function App() {
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
    setTodos((prevTodos) =>
      prevTodos.map((todo: TodoType) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    )
  }

  const handleDelete = ({ id }: Pick<TodoType, 'id'>) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
  }

  const handleEdit = ({
    id,
    title,
    description
  }: Pick<TodoType, 'id' | 'title' | 'description'>) => {
    setTodos((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, title, description } : t))
    )
  }

  const handleCreate = ({
    title,
    description
  }: Pick<TodoType, 'title' | 'description'>) => {
    setTodos((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 1000),
        title,
        description,
        completed: false
      }
    ])
  }

  return (
    <>
      <header className='header'>
        <img src='logo.svg' alt='DGamers Logo' className='header-logo' />
        <h1 className='header-text'>DGamers Todo List</h1>
      </header>
      <main>
        <TodoCreate onCreate={handleCreate} />
        <TodoList
          todos={todos}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onToggle={handleToggleCompleted}
        />
      </main>
    </>
  )
}

export default App
