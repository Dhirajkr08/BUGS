const filter=document.getElementById('filter')
filter.addEventListener('keyup',function(e){
    const textEntered=e.target.value.toLowerCase();
    const fruitItem=document.getElementsByClassName('fruit');
    for(let i=0;i<fruitItem.length;i++){
        const currentText=fruitItem[i].firstChild.textContent.toLocaleLowerCase();
        if(currentText.indexOf(textEntered)===-1){
            fruitItem[i].style.display='none'
        }else{
            fruitItem[i].style.display="flex"
        }
    }
})


