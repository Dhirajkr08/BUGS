document.addEventListener('DOMContentLoaded',loaded)

async function handleFormSubmit(e) {
    e.preventDefault()
    const userDetails={
        name:document.getElementById('username').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value
    }
    try{
        let res=await axios.post("https://crudcrud.com/api/48f521afd2d1419c81d55f73099f8b6f/userData1",userDetails)
        console.log(res.data)
        const userId=res.data._id
        
        displayUserDetails(userDetails,userId)
        localStorage.setItem(userDetails.email,JSON.stringify(userDetails))

    }
    catch(err){
        console.error('Error!',err)
    }
    document.getElementById('username').value=''
    document.getElementById('email').value=''
    document.getElementById('phone').value=''   
}

async function displayUserDetails(userDetails,userId) {
    try{
        let res=await axios.get("https://crudcrud.com/api/48f521afd2d1419c81d55f73099f8b6f/userData1")
        console.log(res.data)
        const list=document.createElement('li')
        list.innerHTML=
        `
        Name: ${userDetails.name},Email:${userDetails.email},Phone:${userDetails.phone}
        <button type='button' class='delete' style='float:right'>Delete</button>
        <button type='button' class='edit' style='float:right'>Edit</button>
        `
        const userli=document.getElementById('userList')
        userli.appendChild(list)

        const editBtn=list.querySelector('.edit')
        editBtn.addEventListener('click',function(){
            editFunction(userDetails,userId,list)
        })

        const delBtn=list.querySelector('.delete')
        delBtn.addEventListener('click',function(){
            deleteFunction(userDetails,list,userId)
        })

    }
    catch(err){
        console.error(err)
    }
     

    
}
async function editFunction(userDetails,userId,list) {
    document.getElementById('username').value=userDetails.name
    document.getElementById('email').value=userDetails.email
    document.getElementById('phone').value=userDetails.phone

    localStorage.removeItem(userDetails.email)

    const submitBtn=document.getElementById('submit')
    submitBtn.removeEventListener('click',handleFormSubmit)
    submitBtn.addEventListener('click',async function editedUserDetails(e) {
        e.preventDefault()
        const editedUserDetails={
            name:document.getElementById('username').value,
            email:document.getElementById('email').value,
            phone:document.getElementById('phone').value
        }
        try{
            let res=await axios.put(`https://crudcrud.com/api/48f521afd2d1419c81d55f73099f8b6f/userData1/${userId}`,editedUserDetails)
            console.log(res.data)
            localStorage.setItem(editedUserDetails.email,JSON.stringify(editedUserDetails))

            list.innerHTML=
            `
            name: ${editedUserDetails.name},email:${editedUserDetails.email}, phone: ${editedUserDetails.phone}
            <button type='button' class='delete' style='float:right'>Delete</button>
            <button type='button' class='edit' style='float:right'>Edit</button>

            `
            const editBtn=list.querySelector('.edit')
            editBtn.addEventListener('click',function(){
                editFunction(editedUserDetails,userId,list)
            })

            const delBtn=list.querySelector('.delete')
            delBtn.addEventListener('click',function(){
                deleteFunction(editedUserDetails,list,userId)
            })

            submitBtn.removeEventListener('click',editedUserDetails)
            submitBtn.addEventListener('click',handleFormSubmit)

        }
        catch(err){
            console.error('Error!',err)
        }
        document.getElementById('username').value=''
        document.getElementById('email').value=''
        document.getElementById('phone').value=''   
          
        
        
    })
    
}
async function deleteFunction(userDetails,list,userId) {
    try{
        let res=await axios.delete(`https://crudcrud.com/api/48f521afd2d1419c81d55f73099f8b6f/userData1/${userId}`)
        console.log(res.data)
        list.remove()
        localStorage.removeItem(userDetails.email)
    }
    catch(err){
        console.error("Error!",err)
    }
    
}


async function loaded() {
    for(let i=0;i<localStorage.length;i++){
        const data=localStorage.key(i)
        const detail=JSON.parse(localStorage.getItem(data))
        await displayUserDetails(detail)
    }
}