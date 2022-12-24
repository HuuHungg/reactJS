import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers'
import { useState } from 'react'

const gifts = [
  'CPU I9',
  'MACBOOK AIR M1',
  'Keychorn k4',
  'ReactJs',
  'logitech'
]


function App() {

  const [gift, setGift] = useState()
  
  const  handleGift = () => {
      const index = Math.floor(Math.random()* gifts.length)
      
      setGift(gifts[index])

  }

  return (
    <div>
        <h1>{gift || 'NO GIFTS'}</h1>
        <button onClick = {handleGift} >Lay thuong</button>
    </div>

  )
  

}

export default App;
