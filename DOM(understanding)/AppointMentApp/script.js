document.addEventListener('DOMContentLoaded',loadItem)


const form=document.getElementById('form')
form.addEventListener('submit',handleSubmit)
function handleSubmit(e){
    e.preventDefault()
    const userDetails={
        username:document.getElementById('name').value,
        emailId:document.getElementById('email').value,
        phoneNo:document.getElementById('phone').value
    }
    if(userDetails){
        storeInLocalStorage(userDetails)
        displayData(userDetails)
    }
    else{
        console.log('Enter all the details')
    }
    document.getElementById('name').value=''
    document.getElementById('email').value=''
    document.getElementById('phone').value=''
}
function storeInLocalStorage(userDetails){
    localStorage.setItem(userDetails.emailId,JSON.stringify(userDetails))
}

function displayData(userDetails){
    let list=document.createElement('li')
    list.style.backgroundColor='grey'
    list.style.padding='25px'
    list.style.border='2px solid green'
    list.style.borderRadius='5px'
    list.innerHTML=`UserName:${userDetails.username},EmailId:${userDetails.emailId},
    PhoneNumber: ${userDetails.phoneNo}
    <button type='button' class='delete' style='background-color:red; border:none; border-radius:5px;float:right;'>Delete</button>
    <button type='button' class='edit' style='background-color:yellow; border:none; border-radius:5px;float:right;'>Edit</button>
    `


    const delBtn=list.querySelector('.delete')
    delBtn.addEventListener('click',function(e){
        e.preventDefault()
        list.remove()
        localStorage.removeItem(userDetails.emailId)
    })

    const editBtn=list.querySelector('.edit')
    editBtn.addEventListener('click',function(){
        editDetails(userDetails,list)
    })
    const userList=document.getElementById('userList')
    userList.appendChild(list)

}
function editDetails(userDetails,list){
    document.getElementById('name').value=userDetails.username
    document.getElementById('email').value=userDetails.emailId
    document.getElementById('phone').value=userDetails.phoneNo

    const submit=document.getElementById('submit')
    submit.removeEventListener('click',handleSubmit)
    submit.addEventListener('click',function newDetails(e){
        e.preventDefault()
        const newDetails={
            username:document.getElementById('name').value,
            emailId:document.getElementById('email').value,
            phoneNo:document.getElementById('phone').value
        }
        if(newDetails){
            localStorage.removeItem(userDetails.emailId)

            list.innerHTML=
            `
            UserName: ${newDetails.username}, EmailId: ${newDetails.emailId},
            PhoneNo: ${newDetails.phoneNo}
            <button type='button' class='delete' style='background-color:red; border:none; border-radius:5px;float:right;'>Delete</button>
            <button type='button' class='edit' style='background-color:yellow; border:none; border-radius:5px;float:right;'>Edit</button>

            `
            localStorage.setItem(newDetails.emailId,JSON.stringify(newDetails))

            const editBtn=list.querySelector('.edit')
            editBtn.addEventListener('click',function(){
                editDetails(newDetails,list)
                
                
            })

            const delBtn=list.querySelector('.delete')
            delBtn.addEventListener('click',function(e){
                e.preventDefault()
                list.remove()
                localStorage.removeItem(newDetails.emailId)
            })

            submit.removeEventListener('click',newDetails)
            submit.addEventListener('click',handleSubmit)
        }
    })

}
function loadItem(){
    for(let i=0;i<localStorage.length;i++){
        const user=localStorage.key(i)
        const userDetails=JSON.parse(localStorage.getItem(user))
        displayData(userDetails)
    }
}