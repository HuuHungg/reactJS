let root = document.getElementById('root')

let h1Element = document.createElement('h1') 
h1Element.innerText =  ' ITは難しいですが将来ですからがんばてください'
h1Element.className = 'test class-2'
h1Element.id = 'reactId'
Object.assign(h1Element.style, {
    color: 'blue',
    backgroundColor: 'gray'
})


root.appendChild(h1Element)

// DOM

let h2DOM =    document.createElement('h2')

h2DOM.innerText = '英語を勉強して日本語を勉強してITを勉強しています'
h2DOM.style.color = 'red'
h2DOM.className = 'Nihon'

document.body.appendChild(h2DOM)


// React

let reactDOM = React.createElement('h4', {
    title: 'Hello',
    className: 'fine'
}, 'でもITは難しいですか')


console.log(reactDOM)