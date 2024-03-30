const form=document.querySelector('form')
const fruits=document.querySelector('.fruits');

form.addEventListener('submit',function(e){
    e.preventDefault()

    //add the item
    const addItem=document.getElementById('search');
    //create new li to update on ui
    const newLi=document.createElement('li');
    //add new li into the same class
    newLi.classList.add('fruit')
    //get the value
    newLi.innerHTML=addItem.value+'<button class="delete-btn">X</button>'+<button class="delete-btn">Edit</button>
    fruits.appendChild(newLi)


})

fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const del=event.target.parentElement;
        fruits.removeChild(del)

    }
})


