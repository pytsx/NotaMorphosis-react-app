import { ThemeProvider } from "@emotion/react"
import { Layout } from "./Page/Layout"
import { MainPage } from "./Page/Main"

function App() {
  return (
    <Layout>
      <MainPage />
    </Layout>
  )
}

export default App
