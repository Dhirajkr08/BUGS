const bt=document.getElementById('bt')
const header=document.getElementById('head')


bt.addEventListener('click',() => {
    header.innerHTML="clicked"
})

bt.addEventListener('mouseover',()=>{
    header.innerHTML='mouse is overed'
    header.style.color='green'
})

bt.addEventListener('mouseout',()=>{
    header.innerHTML='mouse is out'
    header.style.color='blue'
})