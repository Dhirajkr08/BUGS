let count=0
const form=document.getElementById('form')
form.addEventListener('submit',addBlogs,blogEdit)
function addBlogs(e){
    e.preventDefault()
    const postBlog={
        title:document.getElementById('title').value,
        link:document.getElementById('link').value,
        description:document.getElementById('blog').value
    }
    if(postBlog){
        axios.post('https://crudcrud.com/api/6e9180f942804c0bad67020b0b891e85/addBlogs',postBlog)
        .then((res)=>{
            console.log('successfully submitted data',res.data)
            count++
            const userId=res.data._id
            countBlogs()
            displayBlog(userId)
        })
        .catch((err)=>console.log('Error!',err))
    }else{
        console.log('Error!')
    }
    document.getElementById('title').value=''
    document.getElementById('link').value=''
    document.getElementById('blog').value=''
}
function countBlogs(){
    const totalCount=document.getElementById('count')
    totalCount.innerHTML=`Total-Count: ${count}`
}
function displayBlog(userId){
    axios.get(`https://crudcrud.com/api/6e9180f942804c0bad67020b0b891e85/addBlogs/${userId}`)
    .then((res)=>{
        console.log('successfully getting the data',res.data)

        const list=document.createElement('li')

        const title=document.createElement('h3')
        title.textContent=res.data.title
        list.appendChild(title)

        const link=document.createElement('img')
        link.src=res.data.link
        link.style.width='100px';
        link.style.height='100px';
        list.appendChild(link)

        const description=document.createElement('p')
        description.textContent=res.data.description
        list.appendChild(description)

        const editBtn=document.createElement('button')
        editBtn.textContent='Edit'
        list.appendChild(editBtn)

        const deleteBtn=document.createElement('button')
        deleteBtn.textContent='Delete'
        list.appendChild(deleteBtn)

        const userList=document.querySelector('ul')
        userList.appendChild(list)

        editBtn.addEventListener('click',function(){
            blogEdit(res.data,userId,list)
        })
        deleteBtn.addEventListener('click',function(){
            blogDelete(userId,list)
        })
    })
    .catch((err)=>console.log('Error!',err))      
}
function blogEdit(postBlog, userId,list) {
    document.getElementById('title').value=postBlog.title;
    document.getElementById('link').value=postBlog.link;
    document.getElementById('blog').value=postBlog.description;

    const editBlog = {
        title:document.getElementById('title').value,
        link: document.getElementById('link').value,
        description: document.getElementById('blog').value
    };
    if(editBlog.title && editBlog.link && editBlog.description){
        axios.put(`https://crudcrud.com/api/6e9180f942804c0bad67020b0b891e85/addBlogs/${userId}`, editBlog)
        .then((res) => {
            console.log('successfully updated the data', res.data);
            // Refresh the display after editing
            list.innerHTML=`${res.data.title}<br>
            <img src=${res.data.link} style="height:100px;width:100px;"><br>
            ${res.data.description}<br>`
            
        })
        .catch((err) => console.log('Error!', err));
    }
    console.log('error!',err)

    
}
function blogDelete(userId,list){
    axios.delete(`https://crudcrud.com/api/6e9180f942804c0bad67020b0b891e85/addBlogs/${userId}`)
    .then((res)=>{
        console.log('successfully deleted the data',res.data)
        list.remove()
        count--
        countBlogs()
    })
    .catch((err)=>console.log('Error!',err))

}