document.addEventListener('DOMContentLoaded',loadData);

function handleSubmit(e){
    e.preventDefault()
    let taskDetails={
        work:document.getElementById('work').value,
        description:document.getElementById('description').value,
        completed:false
    }
    if(taskDetails){
        axios.post("https://crudcrud.com/api/7ea9f5f83f1a43a98e6982384853336b/taskData",taskDetails)
        .then((res)=>{
            console.log(res.data)
            let userId=res.data._id
            displayTask(taskDetails,userId)
        })
        .catch((err)=>console.log(err))
    }
    else{
        console.log('fill all the details first')
    }
    document.getElementById('work').value='';
    document.getElementById('description').value=''

}
function displayTask(taskDetails,userId){
    //axios.get("https://crudcrud.com/api/55bc0de4b51944da88a7ae95ee8bd1ba/taskData")
    //.then((res)=>{
        const list=document.createElement('li')
        list.innerHTML=`Work: ${taskDetails.work}<br>
        Description: ${taskDetails.description}<br>
        <button type='button' class='tick'>✔</button><button type='button' class='delete'>X</button> `

        const unsettled=document.getElementById('pendingList')
        unsettled.appendChild(list)
        const doneBtn=list.querySelector('.tick')
        doneBtn.addEventListener('click',function(){
            doneData(taskDetails,userId,list)
        })
        const deleteBtn=list.querySelector('.delete')
        deleteBtn.addEventListener('click',function(){
            deleteFunction(userId,list)
        })

    //})
    //.catch((err)=>console.log(err))
    
}
function doneData(taskDetails,userId,list){
    taskDetails.completed=true;
    axios.put(`https://crudcrud.com/api/7ea9f5f83f1a43a98e6982384853336b/taskData/${userId}`,taskDetails)
        
    .then((res)=>{
        console.log(res.data)
        list.remove()
        list.innerHTML=`Work: ${taskDetails.work}<br>
        Description: ${taskDetails.description}<br>
        <button type='button' class='delete'>X</button> `

        const doneData=document.getElementById('doneData')
        doneData.appendChild(list)

        const deleteBtn=list.querySelector('.delete')
        deleteBtn.addEventListener('click',function(){
            deleteFunction(userId,list)
        })
    })
    .catch((err)=>console.log(err))
}
function deleteFunction(userId,list){
    axios.delete(`https://crudcrud.com/api/7ea9f5f83f1a43a98e6982384853336b/taskData/${userId}`)
    .then((res)=>{
        console.log(res.data)
        list.remove()
    })
    .catch((err)=>{
        console.log(err)
    })
}

function loadData(){
    axios.get("https://crudcrud.com/api/7ea9f5f83f1a43a98e6982384853336b/taskData")
    .then((res)=>{
        const data=res.data
        data.forEach(result => {
            displayTask(result,result._id)
            
        });
    })
    .catch((err)=>console.log(err))
    
}
