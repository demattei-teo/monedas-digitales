import 'react'
import Header from './components/header/Header'
import TablaMonedas from './components/tabla_monedas/TablaMonedas'
import { GlobalProvider } from './context/global/GlobalProvider'
import './index.css'

function App () {
  return (
    <>
      <GlobalProvider>
        <Header />
        <TablaMonedas />
      </GlobalProvider>
    </>
  )
}

export default App
