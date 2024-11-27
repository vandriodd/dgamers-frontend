import TodoList from './lib/components/TodoList'
import TodoCreate from './lib/components/TodoCreate'
import './App.css'
import { useTodos } from './hooks/useTodos'

function App() {
  const {
    error,
    todos,
    isLoading,
    handleCreate,
    handleDelete,
    handleEdit,
    handleToggleCompleted
  } = useTodos()

  return (
    <>
      <header className='header'>
        <img src='logo.svg' alt='DGamers Logo' className='header-logo' />
        <h1 className='header-text'>DGamers Todo List</h1>
      </header>
      <main>
        <TodoCreate onCreate={handleCreate} />
        {error != null && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {!isLoading && !error && (
          <TodoList
            todos={todos}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onToggle={handleToggleCompleted}
          />
        )}
      </main>
    </>
  )
}

export default App
