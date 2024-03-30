const form=document.getElementById('form')

//add eventListener
form.addEventListener('submit',addDetails);

function addDetails(e){
    e.preventDefault()
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const mobile=document.getElementById('mobile').value;
    if(name && email && mobile){
        //const data=[name,email,mobile]
        localStorage.setItem('Username',name)
        localStorage.setItem('emailID',email)
        localStorage.setItem('Contact Number',mobile)
    }
}
