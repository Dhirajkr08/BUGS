function handleFormSubmit(e){
    e.preventDefault()
    const userDetails={
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };
    axios
    .post('https://crudcrud.com/api/7ed24e40d2e54c86b6f1f5619c05283b/appointment',userDetails)
    .then((res)=>{
        console.log(res.data)
        displayUserDetails(res.data)

    })
    .catch((err)=>console.log(err))

    //clear the input
    document.getElementById('username').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';
}
function displayUserDetails(userDetails){
    const list=document.createElement('li')
    list.appendChild(
        document.createTextNode(`name:${userDetails.username}, emailId:${userDetails.email}, phone: ${userDetails.phone}`)
    )
    const userList=document.querySelector('ul')
    userList.appendChild(list)

    //edit button
    const editBtn=document.createElement('button');
    editBtn.textContent='Edit'
    list.appendChild(editBtn)

    //delete button
    const deleteBtn=document.createElement('button');
    deleteBtn.textContent='Delete'
    list.appendChild(deleteBtn)

    deleteBtn.addEventListener('click',function(){
        list.remove()
    })

    editBtn.addEventListener('click',function(){
        list.remove()
        document.getElementById('username').value=userDetails.username;
        document.getElementById('email').value=userDetails.email;
        document.getElementById('phone').value=userDetails.phone;

    })


}

