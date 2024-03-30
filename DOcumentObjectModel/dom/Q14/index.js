const form=document.getElementById('form');
const userDetails=document.getElementById('userd');

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault()
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const mobile=document.getElementById('mobile').value;

    if(name && email && mobile){
        const data={name,email,mobile}
        localStorage.setItem(email,JSON.stringify(data))

        displayUserData(data)

    }
}
function displayUserData(user){
    const listItem= document.createElement('li');
    listItem.textContent=`Name: ${user.name}, 
    Email ID: ${user.email}, Mobile: ${user.mobile}`;
    userDetails.appendChild(listItem)
}