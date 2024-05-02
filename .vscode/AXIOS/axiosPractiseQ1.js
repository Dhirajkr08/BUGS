const getBtn=document.getElementById('get-btn');
const postBtn=document.getElementById('post-btn');
const putBtn=document.getElementById('put-btn');
const deleteBtn=document.getElementById('delete-btn');

getBtn.addEventListener('click',getTodos);
postBtn.addEventListener('click',postTodos);
putBtn.addEventListener('click',putTodos);
deleteBtn.addEventListener('click',deleteTodos);

function postTodos(){
    axios
    .post('https://crudcrud.com/api/7ed24e40d2e54c86b6f1f5619c05283b/Todos',{
        title:'Learn Axios',
        completed: false
    })
    .then((res)=>{
        console.log(res.data)
        console.log('successfully posted')
    })
    .catch((err)=>{
        console.log(err)
    })
}
function getTodos(){
    axios
    .get('https://crudcrud.com/api/7ed24e40d2e54c86b6f1f5619c05283b/Todos')
    .then((res)=>{
        console.log(res.data)
        console.log('successfully getting the data')
    })
    .catch((err)=>console.log(err))
}
function putTodos(){
    axios
    .put('https://crudcrud.com/api/7ed24e40d2e54c86b6f1f5619c05283b/Todos/6633363812b33803e8016f0d',{
        title:'Successfully learned Axios',
        completed: true
    })
    .then((res)=>{
        console.log(res.data)
        console.log('successfully edited')
    })
    .catch((err)=>console.log(err))

}
function deleteTodos(){
    axios
    .delete('https://crudcrud.com/api/7ed24e40d2e54c86b6f1f5619c05283b/Todos/663336f812b33803e8016f10')
    .then((res)=>{
        console.log(res.data)
        console.log('successfully deleted data')
    })
    .catch((err)=>console.log(err))
}
