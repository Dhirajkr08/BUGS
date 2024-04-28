const form=document.getElementById('form')
const list=document.getElementById('details')

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault()
    const name=document.getElementById('name').value;
    const contact=document.getElementById('contact').value;
    const email=document.getElementById('email').value;
    const dateTime=document.getElementById('dateTime').value;

    if(name && contact && email && dateTime){
        const data={name,contact,email,dateTime}
        console.log('Data:',data)
        DisplayData(data)

        localStorage.setItem(email,JSON.stringify(data))
    }
    else{
        console.log('error')
    }
}
function DisplayData(data){
    const display=document.createElement('li');
    display.setAttribute('data-email',data.email)
    display.textContent=`name: ${data.name}, contact: ${data.contact}, email: ${data.email}, DateTime: ${data.dateTime}`
    list.appendChild(display)
    console.log('Data displayed on Ui')

    const edtBtn=document.createElement('button')
    edtBtn.textContent='Edit'
    edtBtn.style.backgroundColor='yellow'
    edtBtn.style.borderRadius='5px'

    display.appendChild(edtBtn)

    edtBtn.addEventListener('click',editFunction);

    function editFunction(e){
        e.preventDefault()
        const editedName=prompt('Enter Your Name:')
        const editedContact=prompt('Enter the correct Number:')
        const editedEmail=prompt('Enter your new Email:')
        const editeddateTime=prompt('Enter your new Date&Time:')

        if(editedName && editedContact && editedEmail && dateTime){
            const newData={editedName,editedContact,editedEmail,editeddateTime}

            display.textContent=`Name: ${newData.editedName}, Contact: ${newData.editedContact}, Email: ${newData.editedEmail}, Date&Time: ${newData.editeddateTime}`

            //localStorage.removeItem(data.email)
            if(data.email !== newData.editedEmail){
                localStorage.removeItem(data.email)
            }

            localStorage.setItem(newData.editedEmail,JSON.stringify(newData))
        }
    }

    const delBtn=document.createElement('button')
    delBtn.textContent='Delete'
    delBtn.style.backgroundColor='red'
    delBtn.style.borderRadius='5px'
    delBtn.addEventListener('click',delFunction);
    display.appendChild(delBtn)
    function delFunction(e){
        //e.preventDefault()
        localStorage.removeItem(data.email)
        list.removeChild(display)
    }



}