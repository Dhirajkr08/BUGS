let list=document.getElementsByClassName('fruits')
//make 3rd element in the list yellow background
list[3].style.backgroundColor='yellow'

//make all element in the list have bold font
for(let i=0;i<list.length;i++){
    list[i].style.fontWeight='bold'
}