import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers'
import { useState } from 'react'

const order = [100,200,300]

function App() {

  const [counter, setCounter] = useState( () => {
      const total = order.reduce((cur, urr) => cur + urr)
      console.log(total)
      return total
  })
  
  const handlerCounter = () => {
      setCounter (counter + 1)

      
  }

  return (
      <div className='title' style={{padding: 20}}>
          <h1>{counter}</h1>
          <button onClick={handlerCounter} >Increase</button>
      </div>
  )

}

export default App;
