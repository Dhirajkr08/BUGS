function handleSubmit(e){
    e.preventDefault()
    let Details={
        Name:document.getElementById('name').value,
        Email:document.getElementById('email').value 

    }
    if(Details){
        const list=document.createElement('li')
        list.style.backgroundColor='lightgrey'
        list.style.padding='10px';
        list.style.margin='10px'
        list.style.borderRadius='5px'

        list.textContent=`Name:${Details.Name}, Email: ${Details.Email}`

        const userList=document.getElementById('userList')
        userList.appendChild(list)

        
    }
    else{
        console.log('fill the detials')
    }
    document.getElementById('name').value=''
    document.getElementById('email').value=''
}