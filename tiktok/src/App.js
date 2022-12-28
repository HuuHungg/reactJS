import { useState, useReducer } from 'react';
import Content from './Content'

// useState 
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1) 

// use Reducer
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1) 
// 3. Reducer
// 4. Dispatch

// Init state
const initState = 40
// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
// Reducer
const reducer = (state, action) => {
   
    switch(action) {
      case UP_ACTION:
          return state + 4
      case DOWN_ACTION:
          return  state - 4
      default:
          throw new Error('Invalid action')
    } 
}

function App() {
    const [count, dispatch] = useReducer(reducer, initState)
    return (
      <div style={{padding: '20px 20px'}}> 
          <h1>{count}</h1>
          <button 
              onClick={() => dispatch(DOWN_ACTION)}
          >
              Down
          </button>
          <button 
              onClick={() => dispatch(UP_ACTION)} 
            >
                Up
          </button>
      </div>
    )
}


export default App;
