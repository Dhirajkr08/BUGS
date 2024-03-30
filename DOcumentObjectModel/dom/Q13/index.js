const form=document.getElementById('form')

form.addEventListener('submit',addDetails);

function addDetails(e){
    e.preventDefault()
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('mobile').value;

    if(name && email && phone){
        const data={name,email,phone}
        localStorage.setItem(email,JSON.stringify(data))

    }
}