const postBtn=document.getElementById('post-btn')
const getBtn=document.getElementById('get-btn')
const putBtn=document.getElementById('put-btn')
const delBtn=document.getElementById('delete-btn')

postBtn.addEventListener('click',postTodo)
getBtn.addEventListener('click',getTodo)
putBtn.addEventListener('click',putTodo)
delBtn.addEventListener('click',delTodo)

async function postTodo() {
    try{
        const data={
            Post:'Post submitted',
            completed:false
        }
        let result=await axios.post("https://crudcrud.com/api/ac2dcebb906b416087ed31133909357d/Destin",data)
        console.log("Data posted",result.data)
        
    }
    catch(err){
        console.log(err)
    }      
}
async function getTodo() {
    try{
        let result=await axios.get("https://crudcrud.com/api/ac2dcebb906b416087ed31133909357d/Destin")
        console.log("Data getting on screen",result.data)
    }
    catch(err){
        console.error(err)
    }
    
}
async function putTodo() {
    try{
        let editData={
            post:"Data updated and checked",
            completed:true
        }
        let res=await axios.put("https://crudcrud.com/api/ac2dcebb906b416087ed31133909357d/Destin/66b0072e6b920b03e879e8fc",editData)

        console.log(res.data)
    }
    catch(err){
        console.log(err)
    }
    
}
async function delTodo() {
    try{
        let res=await axios.delete("https://crudcrud.com/api/ac2dcebb906b416087ed31133909357d/Destin/66b0072e6b920b03e879e8fc")
        console.log('data deleted',res.data)
    }
    catch(err){
        console.log(err)
    }

    
}
