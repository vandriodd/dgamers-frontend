import TodoList from './lib/components/TodoList'
import TodoCreate from './lib/components/TodoCreate'
import './App.css'
import { useTodos } from './hooks/useTodos'
import Filters from './lib/components/Filters'

function App() {
  const {
    todos,
    error,
    isLoading,
    filterSelected,
    handleCreate,
    handleDelete,
    handleEdit,
    handleToggleCompleted,
    handleFilterChange
  } = useTodos()

  return (
    <>
      <header className='header'>
        <img src='logo.svg' alt='DGamers Logo' className='header-logo' />
        <h1 className='header-text'>DGamers Todo List</h1>
      </header>
      <main>
        <TodoCreate onCreate={handleCreate} />
        {error != null && <p>{error}</p>}
        {isLoading && <p className='message'>Loading...</p>}
        {!isLoading && !error && (
          <>
            <Filters
              filterSelected={filterSelected}
              onFilterChange={handleFilterChange}
            />
            <TodoList
              todos={todos}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onToggle={handleToggleCompleted}
            />
          </>
        )}
      </main>
    </>
  )
}

export default App
