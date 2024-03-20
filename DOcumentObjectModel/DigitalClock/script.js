/*
function updateClock(){
    const now=new Date()
    const hours=String(now.getHours()).padStart(2,'0')
    const minutes=String(now.getMinutes()).padStart(2,'0')
    const second=String(now.getSeconds()).padStart(2,'0')
    const timeString=`${hours}:${minutes}:${second}`
    document.getElementById('time').textContent=timeString

}
setInterval(updateClock,1000);
updateClock()
*/

/*
function updateClock(){
    const now=new Date()
    const hours=String(now.getHours()).padStart(2,'0')
    const minutes=String(now.getMinutes()).padStart(2,'0')
    const second=String(now.getSeconds()).padStart(2,'0')
    const timeString=`${hours}:${minutes}:${second}`
    document.getElementById('time').textContent=timeString
}
setInterval(updateClock,1000)
updateClock()
*/

function updateClock(){
    const now=new Date()
    const hour=String(now.getHours()).padStart(2,'0')
    const minute=String(now.getMinutes()).padStart(2,'0')
    const second=String(now.getSeconds()).padStart(2,'0')
    const time=`${hour}:${minute}:${second}`
    document.getElementById('time').textContent=time
}
setInterval(updateClock,1000)
updateClock()

