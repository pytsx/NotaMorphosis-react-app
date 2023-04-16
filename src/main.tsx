import { APIProvider, NotesProvider } from './Common/Context'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './Common/Context/Theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <APIProvider>
        <NotesProvider>
          <App />
        </NotesProvider>
      </APIProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
