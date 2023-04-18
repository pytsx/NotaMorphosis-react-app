import { APIProvider, NotesProvider, PerfilProvider, ThemeProvider } from './Common/Context'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PerfilProvider>
      <ThemeProvider>
        <APIProvider>
          <NotesProvider>
            <App />
          </NotesProvider>
        </APIProvider>
      </ThemeProvider>
    </PerfilProvider>
  </React.StrictMode>,
)
