function handleFormSubmit(e){
    e.preventDefault()
    const userDetails={
        name:document.getElementById('username').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value
    }
    axios
    .post('https://crudcrud.com/api/ffc9786d12cc461092bd59af010104f1/formDetails',userDetails)
    .then((res)=>{
        console.log('Successfully submited the data',res.data)
        const userId=res.data._id;
        displayUserDetails(userDetails,userId)
    })
    .catch((err)=>console.log('Error',err))
}
function displayUserDetails(userDetails,userId){
    const list =document.createElement('li')
    list.textContent=`Name:${userDetails.name}, Email:${userDetails.email},phone:${userDetails.phone}`
    const userList=document.querySelector('ul')
    userList.appendChild(list)

    const editBtn=document.createElement('button')
    editBtn.textContent='Edit'
    list.appendChild(editBtn)

    const deleteBtn=document.createElement('button')
    deleteBtn.textContent='Delete'
    list.appendChild(deleteBtn)

    editBtn.addEventListener('click',editHandle)
    function editHandle(e){
        e.preventDefault()
        list.remove()
        const updatedData={
            name:prompt('update your userName:'),
            email:prompt('update Your EmailId:'),
            phone:prompt('update your contact number:')
        }
        axios.put(`https://crudcrud.com/api/ffc9786d12cc461092bd59af010104f1/formDetails/${userId}`,updatedData)
        .then((res)=>{
            console.log('Successfully edited the data',res.data)
            displayUserDetails(updatedData,userId)
            list.textContent=`Name: ${updatedData.name},Email:${updatedData.email}, Phone:${updatedData.phone}`
        })
        .catch((err)=>console.log('Error:',err))
    }

    deleteBtn.addEventListener('click',deleteHandle);
    function deleteHandle(e){
        e.preventDefault()
        list.remove()
        axios.delete(`https://crudcrud.com/api/ffc9786d12cc461092bd59af010104f1/formDetails/${userId}`)
        .then((res)=>console.log('successfully deleted',res.data))
        .catch((err)=>console.log('Error:',err))

    }

    axios.get('https://crudcrud.com/api/ffc9786d12cc461092bd59af010104f1/formDetails')
    .then((res)=>{
        console.log('getting Data',res.data)
        res.data.forEach((user)=>{
            displayUserDetails(user,user._id)
        })
    })
    .catch((err)=>{
        console.log('Error:',err)
    })
}
