function handleFormSubmit(e){
    e.preventDefault()

    const userDetails={
        name:document.getElementById('username').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value
    }
    if(userDetails){
        const email=document.getElementById('email').value;
        localStorage.setItem(email,JSON.stringify(userDetails))
        axios
        .post('https://crudcrud.com/api/a26f9db2f573478bb4183128e1727a81/bookDetails',userDetails)
        .then((res)=>{
            console.log('successfully submitted the data',res.data)
            const userId=res.data._id
            displayUserDetails(userDetails,userId)
        })
        .catch((err)=>{
            console.log('error in submitting the data',err)
        })
    }
    else{
        console.log('Error!')
    }

}
function displayUserDetails(userDetails,userId){
    axios
    .get(`https://crudcrud.com/api/a26f9db2f573478bb4183128e1727a81/bookDetails/${userId}`)
    .then((res)=>{
        console.log('sucessfully getting the data and will display',res.data)
        const list=document.createElement('li')
        list.textContent=`Name:${userDetails.name},Email: ${userDetails.email}, Phone: ${userDetails.phone}`

        const editBtn=document.createElement('button')
        editBtn.textContent='Edit';
        list.appendChild(editBtn)

        const delteBtn=document.createElement('button')
        delteBtn.textContent='Delete';
        list.appendChild(delteBtn)

        const userList=document.querySelector('ul')
        userList.appendChild(list)

        editBtn.addEventListener('click',function(){
            editFunction(userDetails,userId,list)
        })
    })
    .catch((err)=>console.log('Something wrong',err))

}
function editFunction(userDetails,userId,list){

    document.getElementById('username').value=userDetails.name
    document.getElementById('email').value=userDetails.email
    document.getElementById('phone').value=userDetails.phone

    const sumitBtn=document.getElementById('submit')
    sumitBtn.textContent='Update';
    sumitBtn.removeEventListener('click',handleFormSubmit)
    sumitBtn.addEventListener('click',function(e){
        e.preventDefault()
        const updateDetails={
            name:document.getElementById('username').value,
            email:document.getElementById('email').value,
            phone:document.getElementById('phone').value
        }
        if(updateDetails){
            axios
            .put(`https://crudcrud.com/api/a26f9db2f573478bb4183128e1727a81/bookDetails/${userId}`,updateDetails)
            .then((res)=>{
                //list.remove()
                console.log("successfully edited Data",res.data)
                //localStorage.(email,JSON.stringify())

                list.innerHTML = `Name: ${updateDetails.name}, Email: ${updateDetails.email}, Phone: ${updateDetails.phone}<br>
                <button>Edit</button><button>Delete</button>`;
                sumitBtn.textContent='Submit'


            })
            .catch((err)=>console.log('Error!',err))

        }
        else{
            console.log('Not able to delte')
        }
    })



}