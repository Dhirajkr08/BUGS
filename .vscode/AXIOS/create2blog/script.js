let count=0
const form=document.getElementById('form');
form.addEventListener('submit',addBlogs)
function addBlogs(e){
    e.preventDefault()
    const blogDetails={
        title:document.getElementById('title').value,
        image:document.getElementById('link').value,
        description:document.getElementById('blog').value
    }
    if(blogDetails){
        axios.post('https://crudcrud.com/api/83ca143b0b9c4668b8a7877fea64b3a5/blogDetails',blogDetails)
        .then((res)=>{
            console.log('successfully submitted data',res.data)
            const userId=res.data._id
            count++
            blogCount()
            displayBlog(blogDetails,userId)
            
        })
        .catch((err)=>console.log('Error!',err))
    }
    else{
        console.log('Not submitting data')
    }
    document.getElementById('title').value='';
    document.getElementById('link').value='';
    document.getElementById('blog').value='';
}
function blogCount(){
    const totalCount=document.getElementById('count')
    totalCount.innerHTML=`Total-Count: ${count}`
}
function displayBlog(blogDetails,userId){
    axios.get(`https://crudcrud.com/api/83ca143b0b9c4668b8a7877fea64b3a5/blogDetails/${userId}`)
    .then((res)=>{
        console.log('successfully getting data',res.data)

        const list=document.createElement('li')
        list.innerHTML=`${blogDetails.title}<br>
        <img src=${blogDetails.image} style="height:100px;width:100px";><br>
        ${blogDetails.description}<br>
        <button class="edtBtn">Edit</button><button class="delBtn">Delete</button>
        `
        const userList=document.querySelector('ul')
        userList.appendChild(list)

        const editBtn=document.querySelector('.edtBtn')
        editBtn.style.backgroundColor='yellow'
        editBtn.style.border='none'
        editBtn.style.borderRadius='5px'

        editBtn.addEventListener('click',function(){
            editBlogs(blogDetails,userId,list)
        })

        const delteBtn=document.querySelector('.delBtn')
        delteBtn.style.backgroundColor='red';
        delteBtn.style.border='none'
        delteBtn.style.borderRadius='5px';

        delteBtn.addEventListener('click',function(){
            deleteBlogs(userId,list)
        })
    })
    .catch((err)=>console.log('Error in displaying blogs',err))
}
function editBlogs(blogDetails,userId,list){
    document.getElementById('title').value=blogDetails.title;
    document.getElementById('link').value=blogDetails.image;
    document.getElementById('blog').value=blogDetails.description;

    const postBtn=document.getElementById('submit')
    postBtn.textContent='Update-Blog';
    postBtn.removeEventListener('click',addBlogs)
    postBtn.addEventListener('click',function(e){
        e.preventDefault()
        const updateBlogs={
            title:document.getElementById('title').value,
            image:document.getElementById('link').value,
            description:document.getElementById('blog').value
        }
        if(updateBlogs){
            axios.put(`https://crudcrud.com/api/83ca143b0b9c4668b8a7877fea64b3a5/blogDetails/${userId}`,updateBlogs)
            .then((res)=>{
                console.log('successfully editing Data',res.data)
                list.innerHTML=`${updateBlogs.title}<br>
                <img src=${updateBlogs.image} style="height:100px;width:100px;"><br>
                ${updateBlogs.description}`
                postBtn.textContent='Post-Blog';
                //blogCount()

            })
            .catch((err)=>console.log('Error in editing',err))
        }
        document.getElementById('title').value='';
        document.getElementById('link').value='';
        document.getElementById('blog').value='';

    })
}
function deleteBlogs(userId,list){
    axios.delete(`https://crudcrud.com/api/83ca143b0b9c4668b8a7877fea64b3a5/blogDetails/${userId}`)
    .then((res)=>{
        console.log('successfully deleted data',res.data)
        list.remove()
        count--
        blogCount()
    })
    .catch((err)=>{
        console.log('Error in deleting data',err)
    })
}
