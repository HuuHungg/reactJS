// function Input ({ label, ...inputProps }) {
//     return (
//         <div>
//             <label> {label} </label>
//             <input {...inputProps}  />
//         </div>
//     )
// }


// function App() {

//     return (
//         <div id="wrapper"> 
//                 <Input
//                     label="Full name"
//                     type = "text"
//                     placeholder="Enter name..."
//                     title = "Day la input"
//                     onFocus = {()=> {
//                         console.log(Math.random())
//                     }}
//                 />

//         </div>
//     )
// }



function List({data, children}) {
    
    return (
        <ul>
            {data.map((...props) => children(...props))}
        </ul>
    )
}


function App() {
    const cars = ['BWM', 'Honda', 'Mazda']
    
    return (
        <div id="wrapper">
                <List  data = {cars}>
                    {(item,index) => <li key={index}>{item}</li>}    
                 </List>        
        </div>

    )
}


ReactDOM.render(<App  />, document.getElementById('root'))

 