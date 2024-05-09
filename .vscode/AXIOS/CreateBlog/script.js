let count=0
const form=document.getElementById('form');
//add eventlistener for form
form.addEventListener('submit',addBlogs);
//function for add blogs
function addBlogs(e){
    e.preventDefault()
    //take inputs Details
    const blogDetails={
        title:document.getElementById('title').value,
        link:document.getElementById('link').value,
        description:document.getElementById('desc').value
    }
    if(blogDetails){
        axios
        .post('https://crudcrud.com/api/ef3e810c7fc34e12a065ef5bb78071dd/Blogs',blogDetails)
        .then((res)=>{
            console.log('Successfully submitted data',res.data)
            count++
            const userId=res.data._id
            countBlogs()
            displayUserDetails(blogDetails,userId)
            //form.reset()
        })
        .catch((er)=>console.log('Error:',er))

    }
}
function countBlogs(){
    const blogCount=document.getElementById('count');
    blogCount.textContent=`Total-Count: ${count}`
}
function displayUserDetails(blogDetails,userId){
    const list=document.createElement('li');
    

    list.innerHTML=`<h3>${blogDetails.title}</h3>
    <img src=${blogDetails.link} style="width:100px; height:100px"><br>
    ${blogDetails.description}<br>
    <button style="background-color:yellow" id="${userId}" class="edit">Edit</button><button style="background-color:red" id="${userId}" class="delete">Delete</button>`

    const userList=document.querySelector('ul');
    userList.appendChild(list)

    const editBtn=document.querySelector('.edit');
    editBtn.addEventListener('click',editPost);
    function editPost(e){
        list.remove()
        e.preventDefault()
        
        const editedBlogDetails={
            title:prompt('Enter title:'),
            link:prompt('Enter Link:'),
            description:prompt('Enter Descriptions:')
        }
        axios.put(`https://crudcrud.com/api/ef3e810c7fc34e12a065ef5bb78071dd/Blogs/${userId}`,editedBlogDetails)
        .then((res)=>{
            console.log('successfully edited Data',res.data)
            list.innerHTML=`
            <h3>${editedBlogDetails.title}</h3>
            <img src=${editedBlogDetails.link} style="width:100px; height:100px"><br>
            ${editedBlogDetails.description}

            `
            displayUserDetails(editedBlogDetails,userId)
        })

    }
    const deleteBtn=document.querySelector('.delete');
    deleteBtn.addEventListener('click',deletePost);
    function deletePost(e){
        e.preventDefault()
        list.remove()
        axios.delete(`https://crudcrud.com/api/ef3e810c7fc34e12a065ef5bb78071dd/Blogs/${userId}`)
        .then((res)=>{
                console.log('successfully deleted Data',res.data)
        }) 
        .catch((err)=>console.log('Error:',err))   



}

}