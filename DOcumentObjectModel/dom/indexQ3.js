let header=document.getElementById('head');
let div=document.getElementById('header');
let header2=document.getElementById('basket-heading');


header.textContent="Fruit World"
header.style.fontWeight="bold"
header.style.color="orange"
div.style.backgroundColor='green'
div.style.borderBottom='2px solid orange'

header2.style.color='green'

let paragraph=document.createElement('p');
paragraph.textContent='Please Visit Us again'

var divP=document.getElementById('thanks');
divP.appendChild(paragraph)
