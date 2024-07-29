function handleFormSubmit(e){
    e.preventDefault()

    //expense Details
    const item=document.getElementById('item').value;
    const price=document.getElementById('price').value;
    const dateTime=document.getElementById('date').value;

    if(item && price && dateTime){
        const data={item,price,dateTime}

        //store data in localStorae
        localStorage.setItem(item,JSON.stringify(data))

        //store data on crud crud
        axios.post('https://crudcrud.com/api/b20089a71e784825a5818b8122d7a609/expenseDetails',data)
        .then((res)=>{
            console.log('Data successfully posted',res.data)
            const userId=res.data._id
            displayExpenses(userId,data)
        })
        .catch((err)=>console.error(err))

    }
    else{
        console.log('fill the inputs')
    }
    document.getElementById('item').value=''
    document.getElementById('price').value=''
    document.getElementById('date').value=''
}
function displayExpenses(userId,data){
    axios.get(`https://crudcrud.com/api/b20089a71e784825a5818b8122d7a609/expenseDetails/${userId}`)
    .then((res)=>{
        console.log('Data successfully Displayed',res.data)
        const list=document.createElement('li');
        list.innerHTML=`Item: ${data.item}, Price: ${data.price},
        Date&Time:${data.dateTime}
        <button type='button' id='edit' style='background-color:yellow; border-radius:2px; border:none;'>Edit</button>
        <button type='button' id='delete' style='background-color:red; border:none; border-radius:2px;'>Delete</button>

        `
        const expenseList=document.getElementById('result')
        expenseList.appendChild(list)

        const editBtn=document.getElementById('edit')
        editBtn.addEventListener('click',function(e){
            editFunction(list,userId,data)
        })

        const delBtn=document.getElementById('delete')
        delBtn.addEventListener('click',function(e){
            deleteFunction(userId,list,data)
        })

    })
}
function editFunction(list,userId,data){

    document.getElementById('item').value=data.item;
    document.getElementById('price').value=data.price;
    document.getElementById('date').value=data.dateTime;

    const submitBtn=document.getElementById('submit');
    submitBtn.removeEventListener('click',handleFormSubmit)
    submitBtn.addEventListener('click',function(e){
        e.preventDefault()

        const updateDetails={
            item:document.getElementById('item').value,
            price:document.getElementById('price').value,
            dateTime:document.getElementById('date').value
        }
        if(updateDetails){
            axios.put(`https://crudcrud.com/api/b20089a71e784825a5818b8122d7a609/expenseDetails/${userId}`,updateDetails)
            .then((res)=>{
                console.log('Data successfully edited',res.data)
                list.innerHTML=`Item: ${updateDetails.item}, price: ${updateDetails.price}, Date&Time: ${updateDetails.dateTime}`

            })
            .catch((err)=>console.error(err))
        }
        else{
            console.log("update the fields")
        }
    })
    
}
function deleteFunction(userId,list){
    axios.delete(`https://crudcrud.com/api/b20089a71e784825a5818b8122d7a609/expenseDetails/${userId}`)
    .then((res)=>{
        console.log('Data successfully deleted',res.data)
        list.remove()
    })
    .catch((err)=>console.error(err))

    
}