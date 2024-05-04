function handleFormSubmit(e){
    e.preventDefault()
    const userDetails={
        name:document.getElementById('username').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value
    }
    axios.post('https://crudcrud.com/api/ffc9786d12cc461092bd59af010104f1',userDetails)
    .then((res)=>{
        console.log(res.data)
        console.log('data successfully submitted')
        const userId=res.data._id
        displayUserDetails(res.data,userId)
        

    })
    .catch((err)=>console.log(err))
}
function displayUserDetails(userDetails,userId){
    const list=document.createElement('li');
    list.textContent=`Name: ${userDetails.name}, Email: ${userDetails.email}, Phone: ${userDetails.phone}`;
    const userList=document.querySelector('ul');
    userList.appendChild(list)

    // const edtBtn=document.createElement('button');
    // edtBtn.textContent='Edit';
    // list.append(edtBtn)

    // const delBtn=document.createElement('button');
    // delBtn.textContent='Delete';
    // list.appendChild(delBtn);

    // delBtn.addEventListener('click',deleteUser);
    // function deleteUser(e){
    //     e.preventDefault()
    //     axios.delete(`https://crudcrud.com/api/ffc9786d12cc461092bd59af010104f1/BookDetails/${userId}`,userDetails)
    //     .then((res)=>{
    //         console.log('Data removed',res.data)
    //         list.remove()
    //     })
    //     .catch((err)=>console.log('Error',err))


    // }

    // edtBtn.addEventListener('click',editUser);
    // function editUser(e){
    //     e.preventDefault()
        list.remove()
        const updatedDetails={
            name:document.getElementById('username').value,
            email:document.getElementById('email').value,
            phone:document.getElementById('phone').value
        }
        axios.put(`https://crudcrud.com/api/ffc9786d12cc461092bd59af010104f1/${userId}`,updatedDetails)
        .then((res)=>{
            console.log('Data edited',res.data)
            displayUserDetails(updatedDetails,userId)
            
            
    })
        .catch((err)=>console.log('Error:',err))


    // }

    // axios.get('https://crudcrud.com/api/ffc9786d12cc461092bd59af010104f1/BookDetails')
    // .then((res)=>{
    //     const users=res.data
    //     users.forEach(user => {
    //         displayUserDetails(user,user._id)
            
    //     });
    // })
    // .catch((err)=>console.log('Error:',err))

}