import { GlobalContext } from './GlobalContext'
import { useState } from 'react'

const GlobalProvider = ({ children }) => {
  const [input, setInput] = useState('')

  const data = {
    input,
    setInput
  }

  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
}

export { GlobalProvider }
