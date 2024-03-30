const form=document.querySelector('form')
const fruits=document.querySelector('.fruits');

//add eventlistener
form.addEventListener('submit',function(e){
    e.preventDefault()
    const fru=document.getElementById('add');
    //create new li
    const newlist=document.createElement('li')
    //add new li in the same class
    newlist.classList.add('fruit')

    newlist.innerHTML=fru.value+'<button class="edit-btn">Edit</button>'+'<button class="delete-btn">X</button>'
    //append list in items
    fruits.appendChild(newlist)
    
})

fruits.addEventListener('click',function(e){
    e.preventDefault()
    if(e.target.classList.contains('delete-btn')){
        const del=e.target.parentElement;
        fruits.removeChild(del)
    }

})