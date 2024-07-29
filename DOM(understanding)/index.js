document.addEventListener('DOMContentLoaded',loadItem)

document.getElementById('search').addEventListener('input',handleSearch)

const form=document.getElementById('form')
form.addEventListener('submit',handleSubmit)
function handleSubmit(e){
    e.preventDefault()

    const fruit=document.getElementById('fruit').value
    if(fruit){
        displayfruit(fruit)
        storeInStorage(fruit)
    }else{
        console.log('Enter the Input first')
    }
    document.getElementById('fruit').value=''
}
function displayfruit(fruit){
    const list=document.createElement('li')
    list.style.backgroundColor='bisque'
    list.style.padding='10px';
    list.style.border='2px solid pink'
    list.style.borderRadius='5px'
    list.innerHTML=`${fruit}
    <button type='button' class='delete' style='background-color:red; float:right; border:none; border-radius:5px;'>Delete</button>
    <button type='button' class='edit' style='background-color:yellow; float:right; border:none; border-radius:5px;'>Edit</button>
    `
    const editBtn=list.querySelector('.edit')
    editBtn.addEventListener('click',function(){
        editFunction(fruit,list)
    })

    const delBtn=list.querySelector('.delete')
    delBtn.addEventListener('click',function(e){
        e.preventDefault()
        list.remove()
        removeFromStorage(fruit)

    })


    const userList=document.getElementById('userList')
    userList.appendChild(list)

}
function storeInStorage(fruit){
    const fruitList=JSON.parse(localStorage.getItem('fruitList'))||[]
    fruitList.push(fruit)
    localStorage.setItem('fruitList',JSON.stringify(fruitList))
}

function editFunction(fruit,list){
    document.getElementById('fruit').value=fruit

    const submitBtn=document.getElementById('submit')
    submitBtn.removeEventListener('click',handleSubmit)
    submitBtn.addEventListener('click',function editFruit(e){
        e.preventDefault()
        const editFruit=document.getElementById('fruit').value;
        if(editFruit){
            list.innerHTML=`${editFruit}
            <button type='button' class='delete' style='background-color:red; float:right; border:none; border-radius:5px;'>Delete</button>
            <button type='button' class='edit' style='background-color:yellow; float:right; border:none; border-radius:5px;'>Edit</button>
            `
            const editBtn=list.querySelector('.edit')
            editBtn.addEventListener('click',function(){
                editFunction(editFruit,list)
            })

            const delBtn=list.querySelector('.delete')
            delBtn.addEventListener('click',function(e){
                e.preventDefault()
                list.remove()
                removeFromStorage(editFruit)
            })
            updateLoacalStorage(fruit,editFruit)

            submitBtn.removeEventListener('click',editFruit)
            submitBtn.addEventListener('click',handleSubmit)
        }
        else{
            console.log('something wrong in edit section')
        }
    })
}
function removeFromStorage(fruit){
    let fruitList=JSON.parse(localStorage.getItem('fruitList')) || []
    fruitList=fruitList.filter(store=>store !== fruit)
    localStorage.setItem('fruitList',JSON.stringify(fruitList))
}

function loadItem(){
    let fruitList=JSON.parse(localStorage.getItem('fruitList')) || []
    fruitList.forEach(fruit => {
        displayfruit(fruit)
        
    });
}

function handleSearch(){
    const search=document.getElementById('search').value.toLowerCase();
    let fruitList=document.querySelectorAll('#userList li')
    fruitList.forEach(fruit=>{
        const text=fruit.textContent.toLowerCase()
        if(text.includes(search)){
            fruit.style.display=''

        }else{
            fruit.style.display='none'
        }
    })

}

function updateLoacalStorage(fruit,editFruit){
    let fruitList=JSON.parse(localStorage.getItem('fruitList')) || [];
    const index=fruitList.indexOf(fruit)
    if(index!==-1){
        fruitList[index]=editFruit
    }
    localStorage.setItem('fruitList',JSON.stringify(fruitList))
}

