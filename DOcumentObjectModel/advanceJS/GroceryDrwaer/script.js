const form=document.getElementById('form');

//add eventListenr
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault()
    //get values 
    const item=document.getElementById('item').value;
    const price=document.getElementById('price').value;
    const category=document.getElementById('category').value;

    let list;
    switch(category){
        case 'Grocery':
            list=document.getElementById('option1order');
            break
        case 'Skin-Care':
            list=document.getElementById('option2order');
            break
        case 'Medical':
            list=document.getElementById('option3order');
            break
        default:
            console.error("Error: selecting wrong option")
            return
    }
    if(!list){
        console.error('Error: List not found')
    }
    const data={item,price,category}

    //posting data on axios
    axios
    .post('https://crudcrud.com/api/8a8f0498eac04681af12f945047d5d06/groceryData',data)
    .then((result)=>{
        console.log('Data successfully submitted',result.data)
        const userId=result.data._id

        DisplayData(list,data,userId)

    })
    .catch((err)=>{
        console.error('Error:Data not Submitted',err)
    })
}
function DisplayData(list,data,userId){
    const display=document.createElement('li')
    display.textContent=`Item:${data.item}, Price:${data.price}, Category:${data.category}`
    list.appendChild(display)

    const delBtn=document.createElement('button');
    delBtn.textContent='Delete';

    delBtn.addEventListener('click',delItem);
    function delItem(e){
        e.preventDefault()
        axios
        .delete(`https://crudcrud.com/api/8a8f0498eac04681af12f945047d5d06/groceryData/${userId}`)
        .then((result)=>{
            console.log('Data Successfully removed',result.data)
            list.removeChild(display)
        })
        .catch((err)=>{
            console.error('Error: something wrong',err)
        })

    }
    display.appendChild(delBtn)



    const editBtn=document.createElement('button');
    editBtn.textContent='Edit';
   

    editBtn.addEventListener('click',editItem);
    display.appendChild(editBtn)
    function editItem(e){
        e.preventDefault()
        const editeditem=prompt('Enter Your Item')
        const editedPrice=prompt("Enter your New Price")
        //const editedCategory=prompt('Enter your category')
        const newData={item:editeditem,price:editedPrice}

        axios
        .put(`https://crudcrud.com/api/8a8f0498eac04681af12f945047d5d06/groceryData/${userId}`,newData)
        .then((res)=>{
            console.log('successfully edited',res.data)
            display.textContent=`Item:${editeditem}, Price:${editedPrice}`
            list.replaceChild(display)
        })
        .catch((err)=>{
            console.error('Error:not edited',err)
        })

    }    
        


        

}





