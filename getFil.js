function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}
function getFile(callback){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'background.html')
    xhr.load = function (){
        if(xhr.status === 200){
            callback(xhr.responseText)
        }else{
            console.log('Error:', xhr.status)
        }
    }
    xhr.send()
}
getFile(myDisplayer)