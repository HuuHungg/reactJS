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

