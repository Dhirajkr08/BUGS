const form=document.getElementById('form')
const userDetails=document.getElementById('users')

//add event listener
form.addEventListener('submit',addItem);

//start function
function addItem(e){
    e.preventDefault()

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;

    const data={name,email,phone}
    //localStorage.setItem(email,JSON.stringify(data))
    displayUserData(data)

    axios
    .post('https://crudcrud.com/api/745acb5cd9b24f76905c38fbf90a77c3/myDATA',data)
    .then(res=>{console.log("Data sent successfully",res.data)
    data._id=res.data._id
    })
    .catch(err=>{
         console.error('Error in Sending Data',err)

    })

}
function displayUserData(user){
    const details=document.createElement('li')
    details.textContent=`Name: ${user.name}, EmailID: ${user.email}, Contact: ${user.phone}`;

    
    //create delete button
    const deleteBtn=document.createElement('button')
    deleteBtn.className='del-btn';
    deleteBtn.textContent='Delete'
    deleteBtn.style.backgroundColor='red';
    deleteBtn.style.border='2px solid bisque'
    deleteBtn.style.borderRadius='5px'
    deleteBtn.style.float='right';
    deleteBtn.style.fontStyle='italic'
    deleteBtn.style.color='lightblue'
     //append delete btn into details
     details.appendChild(deleteBtn)

    //add eventListener
    deleteBtn.addEventListener('click',()=>{
        deletUser(user._id);
        details.remove()
    })

     
    
    //create edit btn
    const editBtn=document.createElement('button')
    editBtn.className='edit-btn'
    editBtn.textContent='Edit'
    //do styling
    editBtn.style.backgroundColor='yellow';
    editBtn.style.border='2px solid bisque';
    editBtn.style.borderRadius='5px';
    editBtn.style.float='right';
    editBtn.style.fontStyle='italic'
    editBtn.style.color='lightblue'
    

    //append edit button into details
    details.appendChild(editBtn)

     //append details in userdetails
    userDetails.appendChild(details)
}

function deletUser(userId){
    axios
    .delete(`https://crudcrud.com/api/745acb5cd9b24f76905c38fbf90a77c3/myDATA/${userId}`)
    .then(res=>{
        console.log('User delted successfully',res.data)
    })
    .catch(err=>{
        console.error('Error deleting user',err)
    })

}


