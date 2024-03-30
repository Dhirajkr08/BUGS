let header=document.querySelector('#head');
header.style.textAlign='right'

//change the color of second header
let header2=document.querySelector('#basket-heading');
header2.style.color='brown'
header2.style.marginLeft='30px'

let list=document.querySelector('.fruits');
list.style.backgroundColor='grey'
list.style.padding='30px'
list.style.margin='30px'
list.style.width='50%'
list.style.borderRadius='5px'


let fruititem=document.querySelectorAll('.fruit')
for(let i=0;i<fruititem.length;i++){
    fruititem[i].style.backgroundColor='white'
    fruititem[i].style.padding='5px'
    fruititem[i].style.margin='10px'
    fruititem[i].style.borderRadius='5px'

}
let odd=document.querySelectorAll('.fruit')
for(let i=0;i<odd.length;i++){
    if(i%2!==0){
        odd[i].style.backgroundColor='red'

    }
    
    
}