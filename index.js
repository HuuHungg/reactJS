function Button(title, href, onClick) {
    
    let Component = 'button'
    const props = {}

    if (href) {
        Component = 'a'
        props.href = href
    }

    if(onClick) {
        props.onClick = onClick
    }

    console.log(props)

    return (
        <Component {...props}>{title}</Component>
    )
}



function App({title}) {

    return (
        <div id="wrapper"> 
                <h1>{title || content }</h1>
        </div>
    )
}

ReactDOM.render(<App  />, document.getElementById('root'))

