import { ThemeProvider } from "@emotion/react"
import { Layout } from "./Page/Layout"
import { MainPage } from "./Page/Main"
import { usePerfil } from "./Common/Context"
import { LoginPage } from "./Page/Login"

function App() {
  const { perfil } = usePerfil()
  return (
    <Layout>
      {
        !perfil
          ? <LoginPage />
          : <MainPage />
      }
    </Layout>
  )
}

export default App
