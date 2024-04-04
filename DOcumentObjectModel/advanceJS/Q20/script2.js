const form=document.getElementById('form');
const userDetails=document.getElementById('users');

//add eventListener
form.addEventListener('submit',addItem);

//addItem
function addItem(e){
    e.preventDefault()
    //taking input 
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;

    if(name!=='' && email !=='' && phone!==''){
        const data={name,email,phone}

        //posting data on crud
        axios
        .post('https://crudcrud.com/api/07e49f68aa0e4a97bb3d99ab509109b1/myData',data)
        .then(res=>{
            console.log('Data successfully sent to Crud',res.data)
            data._id=res.data._id
            displayUserData(data)
            form.reset()
        })
        .catch(err=>console.error('Error:Data failed to sent on crud',err))
    }
}
function displayUserData(user){
    const details=document.createElement('li')
    details.textContent=`Name:${user.name},
    emailId:${user.email},Phone:${user.phone}`;
    details.setAttribute('data-id', user._id);
    userDetails.appendChild(details)

    //add edit button
    const editBtn=document.createElement('button');
    editBtn.className='editBtn';
    editBtn.textContent='Edit'
    editBtn.style.backgroundColor='yellow'
    editBtn.style.border='2px solid green'
    editBtn.style.borderRadius='5px'
    editBtn.style.float='right'
    editBtn.style.fontStyle='italic'
    //append edit button in details
    details.appendChild(editBtn) 
    
    //add event Listener for the edit button
    editBtn.addEventListener('click',()=>
    editedDetails(user))
}
//create function for edit details
function editedDetails(user){
    const editedName=prompt('Enter your name:',user.name)
    const editedEmail=prompt('Enter your EmailId',user.email)
    const editedPhone=prompt('Enter your contact number',user.phone)

    if(editedName !==null && editedEmail !==null && editedPhone!==null){
        const newData={
            name:editedName||user.name,
            email:editedEmail||user.email,
            phone:editedPhone||user.phone
        }
        axios
        .put(`https://crudcrud.com/api/07e49f68aa0e4a97bb3d99ab509109b1/myData/${user._id}`,newData)
        .then(res=>{
            console.log('Data successfully updated',res.data)
            user.name=editedName;
            user.email=editedEmail;
            user.phone=editedPhone;
            const details=
            userDetails.querySelector(`li[data-id="${user._id}"]`);
            details.textContent=
            `Name:${user.name},EmailId:${user.email},Phone:${user.phone}`;
        })
        .catch(err=>console.error('Error:Data failed to update on Crud',err))

    }

}
