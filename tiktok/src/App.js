import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers'
import { useState } from 'react'


const courses = [
  {
    id: 1,
    name: '日本語',
  },
  {
    id: 2,
    name: '英語'
  },
  {
    id: 3,
    name: 'ITを勉強してる'
  },
  {
    id: 4,
    name: 'ベトナム語'
  }
]


function App() {

    const [checked, setCheck] = useState([])


    const handleCheck = (id) => {
      setCheck(prev => {
        const isChecked = checked.includes(id)
        if(isChecked) {
          return checked.filter(item => item !== id)
        }else {
          return [...prev, id]
        }
      })
    }

    const handleSubmit = () => {  
        console.log({ids: checked})
    }

    return (
        <div style={{padding: 32, color: 'red'}}>

          {courses.map(course => (
            <div key={course.id}>
                <input 
                type="checkbox" 
                checked= {checked.includes(course.id)}
                onChange = {() => handleCheck (course.id)}
                />
                {course.name}
            </div>
          ))}

        <button onClick={handleSubmit} >Register</button>
        </div>
    )

}

export default App;
