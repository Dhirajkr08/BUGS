const form=document.getElementById('form');
const users=document.getElementById('userdetails')
let count=0
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault()
    const name=document.getElementById('name').value;
    const number=document.getElementById('number').value;
    if(name && number){
        count++
        document.getElementById('count').textContent=count
        const data={name,number,count}

        axios.post('https://crudcrud.com/api/6050403870bc475ea2623a62eb95a3fd/myData',data)
        .then((res)=>{
            console.log('successfully submitted',res.data)
            const userId=res.data._id
            updateOnDisplay(data,userId)
        })
        .catch((err)=>{
            console.error('Error something',err)
        })

    }
    


}
function updateOnDisplay(data,userId){
    const list=document.createElement('li')
    list.textContent=`Username: ${data.name}, Seat-Number: ${data.number}, Count:${data.count}`
    users.appendChild(list)

    const edtButton=document.createElement('button')
    edtButton.textContent='Edit'
    edtButton.style.backgroundColor='yellow'
    edtButton.style.borderRadius='5px'
    list.appendChild(edtButton)

    edtButton.addEventListener('click',edtFunction)

    function edtFunction(e){
        e.preventDefault()
        const editedName=prompt('Enter your UserName:')
        const editedSeat=prompt('Enter your Seat-Number:')
        const newData={editedName,editedSeat}
        axios.put(`https://crudcrud.com/api/6050403870bc475ea2623a62eb95a3fd/myData/${userId}`,newData)
        .then((res)=>{
            console.log('Data updated',res.data)
            list.textContent=`Username: ${editedName} Seat-Number: ${editedSeat}`

            
        })
        .catch((err)=>console.log('Error',err))
        
    }

    const delButton=document.createElement('button')
    delButton.textContent='Delete'
    delButton.style.backgroundColor='red'
    delButton.style.borderRadius='5px';

    list.appendChild(delButton)
    delButton.addEventListener('click',delFun);

    function delFun(e){
        e.preventDefault()
        axios.delete(`https://crudcrud.com/api/6050403870bc475ea2623a62eb95a3fd/myData/${userId}`)
        .then((res)=>{
            console.log('Data delted',res.data)
            list.remove()
            count--
            document.getElementById('count').textContent=count
        })
        .catch((err)=>{
            console.log('Error Happening',err)
        })
    }


}