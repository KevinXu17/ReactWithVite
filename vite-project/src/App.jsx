import { useState } from 'react'
import './App.css'
import HomeNavBar from './NavBar'
import PokemonContent from './PokemonContent'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <HomeNavBar/>
      <div className='MainPage'>
        <PokemonContent/>
        <PokemonContent/>
        <PokemonContent/>
      </div>
    </div>
    
  )
}

export default App
