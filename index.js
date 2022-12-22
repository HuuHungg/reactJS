// DOM

let ulDOM = document.createElement('ul')
ulDOM.className = 'file'
ulDOM.style = 'color: red; font-size: 20px'


let liDOM1 = document.createElement('li')
liDOM1.innerText = '日本語を勉強してる'


let liDOM2 = document.createElement('li')
liDOM2.innerText = 'ITを勉強して英語を勉強してる'
liDOM2.style = 'color: green'

ulDOM.appendChild(liDOM1)
ulDOM.appendChild(liDOM2)

document.body.appendChild(ulDOM)



//React


let ulReact = React.createElement(
    'ul',
    {
        id: 'name',

    }, 
     React.createElement ('li', {class: 'react', id: 'Name'}, 'Javascript'),
     React.createElement ('li', null, 'ReactJS')

    )

console.log(ulReact)


// DOM
let divDom = document.createElement('div')
divDom.className = 'post-Items'

let h2DOM = document.createElement('h2')
h2DOM.innerText = '今日は11時に起きました体が悪いですから。こぜん彼女といしょうに飲みました'
h2DOM.style = 'color: gray'
h2DOM.title = 'Hoc ReactJS form zero to Hero'

let pDOM = document.createElement('p')
pDOM.innerText = '明日5時に起くつもりです。今朝ITを勉強して英語を勉強して。がんぱってください'


divDom.appendChild(h2DOM)
divDom.appendChild(pDOM)

document.body.appendChild(divDom)

 
// Reat //

let divReact = React.createElement(
    'div',
    {
        className: 'Post-Items'
    }, 
    React.createElement('h2', {title: 'Hoc React at f8'}, 'Hoc ReactJS'),
    React.createElement('p', null, 'learn ReactJS for zero to hero')
)

console.log(divReact)
