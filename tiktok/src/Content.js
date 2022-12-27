import { useEffect, useState  } from 'react'

// side effects: Chuong trinh phan mem
// Call back luon duoc goi sau khi Component mouse

function Content () {
   const [width, setWidth] = useState(window.innerWidth)

   useEffect(() => {
    
    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    //cleanup function
   
    return () => {
        window.removeEventListener('resize', handleResize)
    }

   }, [])

   return (
    <div>
        <h1>{width}</h1>
    </div>
   )
}

export default Content

