document.addEventListener('DOMContentLoaded',loadData)

async function handleFormSubmit(e) {
    e.preventDefault()
    const userDetails={
        name:document.getElementById('username').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value
    }
    try{
        let result=await axios.post("https://crudcrud.com/api/48f521afd2d1419c81d55f73099f8b6f/showData",userDetails)
        console.log(result.data)
        displayUserDetails(result.data)
        
    }
    catch(err){
        console.error('Error!',err)
    }
    
}
async function displayUserDetails() {
    try{
        let res=await axios.get("https://crudcrud.com/api/48f521afd2d1419c81d55f73099f8b6f/showData")
        let data=res.data
        for(let i=0;i<data.length;i++) {
            if(!document.getElementById('data[i]._id')){
                const list=document.createElement('li')
                list.innerHTML=`Name:${data[i].name}, Email:${data[i].email}, phone:${data[i].phone}`
                const userList=document.getElementById('userList')
                userList.appendChild(list)
            }
            
            
        };
        
    }
    catch(err){
        console.error('Error!',err)
    }
    
}
async function loadData(data) {
    await displayUserDetails()
    
}
