function Input ({ label, ...inputProps }) {
    return (
        <div>
            <label> {label} </label>
            <input {...inputProps}  />
        </div>
    )
}



function App() {

    return (
        <div id="wrapper"> 
                <Input
                    label="Full name"
                    type = "text"
                    placeholder="Enter name..."
                    title = "Day la input"
                    onFocus = {()=> {
                        console.log(Math.random())
                    }}
                />

        </div>
    )
}

ReactDOM.render(<App  />, document.getElementById('root'))

 