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