
// function Conponent

function Header() {
    return (
        <div className="header"> New Header</div>
    )
}

function Content() {
    return (
        <div className= "content"> ITを勉強してる </div>
    )
}

// class

class ClassName extends React.Component {
    render() {
        return (
            <div className="footer">でも難しいです</div>
        )
    }
}



const app = (
        <div class="wrapper">
                <Header />
                <Content />
                <ClassName />
        </div>  
)

console.log(app)


let root = document.getElementById('root')
let list = ReactDOM.createRoot(root)
list.render(app)


