import React, { useState } from 'react'
import { api } from 'criando-monorepo-axios-config'

interface Message {
  message: string
}

const App: React.FC = () => {
  const [h, setH] = useState<Message>(null)
  api.get<Message>('/').then(r => {
    setH(r.data)
  })
  return <h1>{h?.message ?? ''}</h1>
}

export default App
