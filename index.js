let container = document.getElementById('root')

let divReact = React.createElement(
    'div',
    {
        className: 'Post-Items'
    }, 
    React.createElement('h2', {title: 'Hoc React at f8', color: 'red'}, 'ITを勉強してる'),
    React.createElement('p', null, 'がんぱってください')
)

    let root = ReactDOM.createRoot(container)
    root.render(divReact)





// React h1
let root2 = document.getElementById('root2')

let h1React = React.createElement(
    'h1', 
    {
        title: 'hello',
        className: 'heading',
    },
    'Hello guys'
)

let h1 = ReactDOM.createRoot(root2)
h1.render(h1React)


let ulDom = React.createElement(
    'ul',
    null,
    React.createElement('li', {}, 'Javascript'),
    React.createElement('li', {}, 'ReactJS')
)

let ul = ReactDOM.createRoot(root3)
ul.render(ulDom)


// const ul = <ul>
//     <li>Javascript</li>
//     <li>ReactJs</li>
//     <li>NodeJS bassic</li>
// </ul>

// let ulReact = ReactDOM.createRoot(root4)
// ulReact.render(ul)


// const course = [
//     {
//         name: HTMLAllCollection.css,
//     },
//     {
//         name: 'Responsive web design'
//     },
//     {
//         name: 'ReactJS'
//     }
// ]

// let ulCourse = ReactDOM.createRoot(root4)
// ulCourse.render(course)


