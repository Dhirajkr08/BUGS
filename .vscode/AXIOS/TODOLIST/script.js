const form=document.getElementById('form')
form.addEventListener('submit',addTodo);
function addTodo(e){
    e.preventDefault()
    const todoDetails={
        title:document.getElementById('todo').value,
        description:document.getElementById('description').value,
        completed:false 
    }
    if(todoDetails){
        axios.post('https://crudcrud.com/api/8c55141f11d346f6bb0cb9b883c728a1/todoList',todoDetails)
        .then((response)=>{
            console.log("Successfully submitted Data",response.data)
            const userId=response.data._id
            displayTodo(todoDetails,userId)

        })
        .catch((err)=>console.log('Unable to submit todo',err))
    }
    else{
        console.log('Add Details')
    }
    document.getElementById('todo').value=''
    document.getElementById('description').value=''
    

}
function displayTodo(todoDetails,userId){
    axios.get(`https://crudcrud.com/api/8c55141f11d346f6bb0cb9b883c728a1/todoList/${userId}`)
    .then((res)=>{
        console.log('successfully getting data for display',res.data)
        const list=document.createElement('li')
        list.innerHTML=`Work:${todoDetails.title}  Description:${todoDetails.description}
        <button id="complete" style="background-color:green; border-radius:5px; border:none;">✓</button>
        <button id="delete" style="background-color:red; border-radius:5px; border:none;">✘</button>
        `
        const todoList=document.getElementById('ul1')
        todoList.appendChild(list)

        const completeBtn=document.getElementById('complete')
        completeBtn.addEventListener('click',function(){
            workDone(todoDetails,userId,list)
        })

        const delteBtn=document.getElementById('delete')
        delteBtn.addEventListener('click',function(){
            deleteTodo(userId,list)
        })
        
    
    })
}
function workDone(todoDetails,userId,list){
    const updateTodoDetails={
        title:todoDetails.title,
        description:todoDetails.description,
        completed:true
    }
    axios.put(`https://crudcrud.com/api/8c55141f11d346f6bb0cb9b883c728a1/todoList/${userId}`,updateTodoDetails)
    .then((res)=>{
        console.log('Successfully updated',res.data)
        list.remove()
        displayUpdate(updateTodoDetails)
    })
    .catch((err)=>console.log('unable to update',err))

}
function displayUpdate(updateTodoDetails){
    const uplist=document.createElement('li')
    uplist.innerHTML=`Work:${updateTodoDetails.title}  Description:${updateTodoDetails.description}`
    const completeList=document.getElementById('ul2')
    completeList.appendChild(uplist)
}

function deleteTodo(userId,list){
    axios.delete(`https://crudcrud.com/api/8c55141f11d346f6bb0cb9b883c728a1/todoList/${userId}`)
    .then((res)=>{
        console.log('Successfully deleted',res.data)
        list.remove()

    })
    .catch((err)=>console.log('unable to delete',err))    
}
