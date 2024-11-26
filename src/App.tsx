import { PrimeReactProvider } from 'primereact/api'
import TodoList from './lib/components/TodoList'
import './App.css'

function App() {
  return (
    <PrimeReactProvider value={{ unstyled: true }}>
      <header className='header'>
        <img src='logo.svg' alt='DGamers Logo' className='header-logo' />
        <h1 className='header-text'>DGamers Todo List</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </PrimeReactProvider>
  )
}

export default App
