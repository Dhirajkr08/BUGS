let header=document.querySelector('#head')
header.style.textAlign='right'
// header.style.padding='30px'
// header.style.borderRadius='5px'
// header.style.margin='10px'

let header2=document.querySelector('h2')
header2.style.color='red'
header2.style.marginLeft='30px'

let div=document.querySelector('.fruits')
div.style.backgroundColor='grey'
div.style.padding='30px'
div.style.margin='30px'
div.style.width='50%'
div.style.borderRadius='5px'
div.style.listStyleType='none'

const fruitItems=document.querySelectorAll('.fruit');
for(let i=0;i<fruitItems.length;i++){
    fruitItems[i].style.backgroundColor='white'
    fruitItems[i].style.padding='10px'
    fruitItems[i].style.margin='10px'
    fruitItems[i].style.borderRadius='5px'
}

const odd=document.querySelectorAll('.fruit:nth-Child(odd)')
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='red';
}

