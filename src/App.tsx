import { Layout } from "./Page/Layout"
import { LandingPage } from "./Page/LandingPage"
import { MainPage } from "./Page/Main"
import { DocPage } from "./Page/Doc"
import { useNavigate } from "./Common/Context"

function App() {
  const { navigate, currentPage } = useNavigate()
  return (
    <Layout>
      {
        currentPage == 1
          ? <LandingPage />
          : currentPage == 2
            ? <MainPage />
            : <DocPage />
      }
    </Layout>
  )
}

export default App
