const form=document.getElementById('form');

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault()

    const item=document.getElementById('item').value;
    const price=document.getElementById('price').value;
    const option=document.getElementById('options').value;

    let list;
    switch(option){
        case 'desi':
            list=document.getElementById('option1order')
            break
        case 'chinese':
            list=document.getElementById('option2order')
            break
        case 'italiano':
            list=document.getElementById('option3order')
            break
        default:
            console.error('Error: selecting wrong option')
            return

    }
    if(!list ){
        console.error('List not found')
    }
    
    if(item && price && option){
        const data={item,price,option}

        //store data on localStorage
        localStorage.setItem(item,JSON.stringify(data))

        //store data on axios
        axios
        .post('https://crudcrud.com/api/8a8f0498eac04681af12f945047d5d06/myData',data)
        .then(res=>{
            console.log('data successfully submitted',res.data)
            const userId=res.data._id
            DisplayData(list,data,userId)
            //edtFunction(list,data,userId)

        })
        .catch((err)=>{
            console.error('Error! not submitting the data',err)
        })

    }else{
        console.error('Error in submitting')
    }
    
}
function DisplayData(list,data,userId){
    const display=document.createElement('li')
    display.textContent=`Item : ${data.item}, Price: ${data.price}, Option: ${data.option} `
    list.appendChild(display)

    const editBtn=document.createElement('button');
    editBtn.textContent='Edit'
    editBtn.style.backgroundColor='yellow'
    editBtn.style.borderRadius='5px'
    display.appendChild(editBtn)

    editBtn.addEventListener('click',edtFunction);

    function edtFunction(e){
        e.preventDefault()

        const editedItem=prompt('Enter your new Item')
        const editedprice=prompt('Enter the new price')
        const editedoption=prompt('Enter the option')

        if(editedItem && editedprice && editedoption){
            const newData={editedItem,editedprice,editedoption}

            axios
            .put(`https://crudcrud.com/api/8a8f0498eac04681af12f945047d5d06/myData/${userId}`,newData)
            .then(res=>{
                console.log('successfully edited',res.data)
                display.textContent=`Item: ${editedItem},Price:${editedprice}, Option:${editedoption} `
            })
            .catch(err=>console.error('Error',err))
        }
        else{
            console.error('Something wrong failed to update')
        }

    }
    const delItem=document.createElement('button');
    delItem.textContent='Delete'
    delItem.style.backgroundColor='red'
    delItem.style.borderRadius='5px'
    display.appendChild(delItem)

    delItem.addEventListener('click',delFunction);

    function delFunction(e){
        e.preventDefault()
        axios
        .delete(`https://crudcrud.com/api/8a8f0498eac04681af12f945047d5d06/myData/${userId}`)
        .then(res=>{
            console.log('Data successfully removed',res.data)
            list.removeChild(display)

        })
        .catch(err=>console.error('not able to delete',err))
    }


}
