import { StrictMode } from 'react'
import { PrimeReactProvider } from 'primereact/api'
import { createRoot } from 'react-dom/client'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import App from './App.tsx'
import 'primeicons/primeicons.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>
)
