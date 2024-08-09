document.addEventListener('DOMContentLoaded',loadDataTodo)


async function handleSubmit(e){
    e.preventDefault()
    try{
        let details={
            work:document.getElementById('work').value,
            description:document.getElementById('description').value,
            completed:false,
        }
        if(details){
            let result=await axios.post("https://crudcrud.com/api/8a4058016dfd423ca7fa173887836df9/saveWork",details)
            console.log('Data posted',result.data)
            const userId=result.data._id
            await displayDetails(details,userId)
        }
        else{
            console.log('Fill the input field first')
        }


    }
    catch(err){
        console.error('Error!',err.message)
    }
}
async function displayDetails(details,userId) {

    try{
        let list=document.createElement('li')
        list.style.backgroundColor='grey'
        list.style.border='none'
        list.style.borderRadius='5px'
        list.style.padding='10px'
        list.style.margin='5px'
        list.innerHTML=`WorkTitle: ${details.work}<br> Description: ${details.description}<br>
        <button type='button' class='done' style='background-color:green; border:none; border-radius:5px'>✔</button>
        <button type='button' class='delete' style='background-color:pink; border:none; border-radius:5px'>✘</button>`
    
        const doneBtn=list.querySelector('.done')
        doneBtn.addEventListener('click',function(){
            completedFuncton(userId,list)
        })

        const deleteBtn=list.querySelector('.delete')
        deleteBtn.addEventListener('click',function(){
            deleteTodo(userId,list)
        })
    
        const pendingList=document.getElementById('pendingList')
        pendingList.appendChild(list)
    }
    catch(err){
        console.error('Error in displayDetails',err.message)
    }
    
}

async function completedFuncton(userId,list) {
    try{
        let doneDetails={
            work:document.getElementById('work').value,
            description:document.getElementById('description').value,
            completed:true
        }
        if(doneDetails){
            let result=await axios.put(`https://crudcrud.com/api/8a4058016dfd423ca7fa173887836df9/saveWork/${userId}`,doneDetails)
            console.log(result.data)
            list.innerHTML=`WorkTitle: ${doneDetails.work}<br> Description: ${doneDetails.description}<br>
            <button type='button' class='done' style='background-color:pink; border:none; border-radius:5px'>✘</button>
            `
            const doneList=document.getElementById('doneData')
            doneList.appendChild(list)
        }
        else{
            console.log('still you have to complete todo') 
        }


    }
    catch(err){
        console.error('Error in completedFunction',err)
    }
    
}
async function deleteTodo(userId,list) {
    try{
        await axios.delete(`https://crudcrud.com/api/8a4058016dfd423ca7fa173887836df9/saveWork/${userId}`)
        console.log('data deleted')
        list.remove()
    }
    catch(err){
        console.error('Error in delete!',err.message)
    }
    
}
async function loadDataTodo() {
    try{
        let result=await axios.get('https://crudcrud.com/api/8a4058016dfd423ca7fa173887836df9/saveWork')
        const workDetails=result.data
        for(let i=0;i<workDetails.length;i++){
            if(workDetails[i].completed){
                let list =document.createElement('li')
                list.innerHTML=`WorkTitle: ${workDetails[i].work} <br>
                Description:${workDetails[i].description}
                <button type='button' class='delete' style='background-color:pink; border:none; border-radius:5px'>✘</button>
                `
                const doneList=document.getElementById('doneData')
                doneList.appendChild(list)

                const deleteBtn=list.querySelector('.delete')
                deleteBtn.addEventListener('click',function(){
                    deleteTodo(workDetails[i]._id,list)
                })
            }
            else{
                const list=document.createElement('li')
                list.innerHTML=`WorkTitle: ${workDetails[i].work}<br> Description: ${workDetails[i].description}<br>
                <button type='button' class='done' style='background-color:green; border:none; border-radius:5px'>✔</button>
                <button type='button' class='delete' style='background-color:pink; border:none; border-radius:5px'>✘</button>`

                const pendingList=document.getElementById('pendingList')
                pendingList.appendChild(list)

                const doneBtn=list.querySelector('.done')
                doneBtn.addEventListener('click',function(){
                    completedFuncton(workDetails[i]._id,list)
                })

                const deleteBtn=list.querySelector('.delete')
                deleteBtn.addEventListener('click',function(){
                    deleteTodo(workDetails[i]._id,list)
                })
            }
        }
    }
    catch(err){
        console.error('problem in Reload',err.message)
    }
    
}