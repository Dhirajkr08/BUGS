function handleSubmit(e){
    e.preventDefault()

    const data={
        image:document.getElementById('image').value,
        description:document.getElementById('description').value,
        completed:false
    }
    if(data){
        axios.post('https://crudcrud.com/api/8c55141f11d346f6bb0cb9b883c728a1/todos',data)
        .then((res)=>{
            console.log('Data submit Done',res.data)
            const userId=res.data._id
            displayData(data,userId)
        })
        .catch((err)=>console.error('something wrong',err))
        
    }
    else{
        console.log('fill all the details')
    }
    document.getElementById('image').value=''
    document.getElementById('description').value=''

}    
function displayData(data,userId){
    axios.get(`https://crudcrud.com/api/8c55141f11d346f6bb0cb9b883c728a1/todos/${userId}`)
    .then((res)=>{
        console.log('Data will display',res.data)

        let list=document.createElement('li')
        list.innerHTML=`<img src='${data.image}' style='height:100px; width:100px'><br>
        ${data.description}<br>
        <button type='button' class='edit'>Edit</button>
        <button type='button' class='done'>Done</button>
        `
        const editBtn=list.querySelector('.edit')
        editBtn.addEventListener('click',function(e){
            editwork(list,userId,data)
        })

        const doneBtn=list.querySelector('.done')
        doneBtn.addEventListener('click',function(e){
            doneData(list,userId,data)
        })
        const pending=document.getElementById('pending')
        pending.appendChild(list)
    })
    .catch((err)=>console.error(err))
}
function editwork(list,userId,data){

    document.getElementById('image').value=data.image;
    document.getElementById('description').value=data.description;

    const submitBtn=document.getElementById('submit')
    submitBtn.removeEventListener('click',handleSubmit)
    submitBtn.addEventListener('click',function updateSubmit(e){
        e.preventDefault()

        const editedData={
            image:document.getElementById('image').value,
            description:document.getElementById(`description`).value,
            completed:false
        }
        if(editedData){
            axios.put(`https://crudcrud.com/api/8c55141f11d346f6bb0cb9b883c728a1/todos/${userId}`,editedData)
            .then((res)=>{
                console.log('edited',res.data)

                list.innerHTML=`
                <img src='${editedData.image}' style='height:100px; width:100px'><br>
                ${editedData.description}<br>
                <button type='button' class='edit'>Edit</button>
                <button type='button' class='done'>Done</button>
                `
                pending.appendChild(list)

                const editBtn=list.querySelector('.edit')
                editBtn.addEventListener('click',function(e){
                    editwork(list,userId,editedData)
                })

                submitBtn.removeEventListener('click',updateSubmit)
                submitBtn.addEventListener('click',handleSubmit)

                
            })
            .catch((err)=>console.log(err))
        }
        else{
            console.log('fill for the edit')
        }
    })
    
}
function doneData(list,userId,data){
    const doneData={
        ...data,
        completed:true
    }
    
    axios.put(`https://crudcrud.com/api/8c55141f11d346f6bb0cb9b883c728a1/todos/${userId}`,doneData)
    .then((res)=>{console.log('done',res.data)
        console.log('happyCoding')
        list.remove()
        const newLi=document.createElement('li')
        newLi.innerHTML=`
            <img src='${doneData.image}' style='height:100px; width:100px'><br>
            ${doneData.description}<br>
            <button type='button' class='edit'>Edit</button>
            <button type='button' class='done'>Done</button>
            `
        const editBtn=list.querySelector('.edit')
        editBtn.addEventListener('click',function(e){
            editwork(newLi,userId,doneData)
        })  
        
        const doneBtn=newLi.querySelector('.done')
        doneBtn.addEventListener('click',function(e){
            doneData(list,userId,doneData)
        })
        
        const result=document.getElementById('result')
        result.appendChild(newLi)

        const submitBtn=document.getElementById('submit')
        submitBtn.removeEventListener('click',handleSubmit)
        submitBtn.addEventListener('click',handleSubmit)
    })
    .catch((err)=>console.error(err))
}
    
    
