const list=document.querySelectorAll('.list')
list[0].style.backgroundColor='green'
list[0].textContent='Hello Brotha'
list[1].style.backgroundColor='yellow'



//next question answer

list[0].addEventListener('mouseover',()=>{
    list[0].textContent='mouseOvered'
    list[0].style.backgroundColor='red'
})

list[0].addEventListener('mouseout',()=>{
    list[0].textContent='mouseout';
    list[0].style.backgroundColor='pink';
})
    
