document.addEventListener('DOMContentLoaded',load)

const form=document.getElementById('form')
form.addEventListener('submit',handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    let expenseDetails={
        name:document.getElementById('expense').value,
        price:document.getElementById('price').value,
        category:document.getElementById('category').value
    }
    if(expenseDetails.name && expenseDetails.price && expenseDetails.category){
        storeInLocalStorage(expenseDetails);
        displayData(expenseDetails);
    }
    else{
        console.log('fill all the field first')
    }
    document.getElementById('expense').value='';
    document.getElementById('price').value='';
    document.getElementById('category').value='';

}
function storeInLocalStorage(expenseDetails){
    localStorage.setItem(expenseDetails.name,JSON.stringify(expenseDetails))
}

function displayData(expenseDetails){
    let list=document.createElement('li')
    list.style.backgroundColor='blanchedalmond'
    list.style.border='none'
    list.style.borderRadius='5px'
    list.style.padding='10px'
    list.style.margin='5px'
    list.innerHTML=`Expense: ${expenseDetails.name}, Price($): ${expenseDetails.price}, 
    Expense-Category: ${expenseDetails.category}
    <button type='button' class='delete' style='background-color:red; border:none; border-radius:5px;float:right;'>Delete</button>
    <button type='button' class='edit' style='background-color:yellow; border:none; border-radius:5px;float:right'>Edit</button>`


    const result=document.getElementById('result')
    result.appendChild(list)

    const editBtn=list.querySelector('.edit')
    editBtn.addEventListener('click',function(){
        editFunction(expenseDetails,list)
    })

    const delBtn=list.querySelector('.delete')
    delBtn.addEventListener('click',function (e){
        e.preventDefault()
        list.remove()
        localStorage.removeItem(expenseDetails.name)

    })
}

function editFunction(expenseDetails,list){
    document.getElementById('expense').value=expenseDetails.name
    document.getElementById('price').value=expenseDetails.price
    document.getElementById('category').value=expenseDetails.category

    const submitBtn=document.getElementById('submit')
    submitBtn.removeEventListener('click',handleSubmit)
    submitBtn.addEventListener('click',function editDetails(e){
        e.preventDefault()
        let editDetails={
            name:document.getElementById('expense').value,
            price:document.getElementById('price').value,
            category:document.getElementById('category').value
        }
        if(editDetails.name && editDetails.price && editDetails.category){
            localStorage.removeItem(expenseDetails.name)
            list.innerHTML=`
            Expense-Name: ${editDetails.name}, $price: ${editDetails.price},
            Category: ${editDetails.category}
            <button type='button' class='delete' style='background-color:red; border:none; border-radius:5px;float:right;'>Delete</button>
            <button type='button' class='edit' style='background-color:yellow; border:none; border-radius:5px;float:right'>Edit</button>

            `
            localStorage.setItem(editDetails.name,JSON.stringify(editDetails))

            const editBtn=list.querySelector('.edit')
            editBtn.addEventListener('click',function(){
                editFunction(editDetails,list)
            })

            const delBtn=list.querySelector('.delete')
            delBtn.addEventListener('click',function(e){
                e.preventDefault()
                list.remove()
                localStorage.removeItem(editDetails.name)
            })

            submitBtn.removeEventListener('click',editDetails)
            submitBtn.addEventListener('click',handleSubmit)

        }
        else{
            console.log('data not edited')
        }
    })
    
}
function load(){
    for(let i=0;i<localStorage.length;i++){
        const user=localStorage.key(i)
        const userDetails=JSON.parse(localStorage.getItem(user))
        displayData(userDetails)
    }
}

