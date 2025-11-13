import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskOneDisplay from './Page/TaskOneDisplay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskOneDisplay />
  </StrictMode>,
)
