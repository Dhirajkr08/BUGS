let h3=document.createElement('h3')
h3.textContent="Buy high quality organic fruits online"
h3.style.fontStyle='italic'

let header=document.getElementById('head')
header.appendChild(h3)

//create paragraph
let paragraph=document.createElement('p')
paragraph.textContent="Total fruits: 4"

//set id
paragraph.id="fruits-total"


let div=document.querySelector('#div2')
div.insertBefore(paragraph,div.firstChild)


