import { useState } from 'react'
import Background from './components/background'
import Forground from './components/forground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative w-full h-screen bg-zinc-800'> 
      <Background />
      <Forground/>
       </div>

    </>
  )
}

export default App
