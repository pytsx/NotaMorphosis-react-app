import { APIProvider, DocProvider, NavigateProvider, NotesProvider, PerfilProvider, ThemeProvider } from './Common/Context'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavigateProvider>
      <APIProvider>
        <PerfilProvider>
          <ThemeProvider>
            <NotesProvider>
              <DocProvider>
                <App />
              </DocProvider>
            </NotesProvider>
          </ThemeProvider>
        </PerfilProvider>
      </APIProvider>
    </NavigateProvider>
  </React.StrictMode>,
)
