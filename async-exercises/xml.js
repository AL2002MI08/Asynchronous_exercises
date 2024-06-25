// Write a function that makes an asynchronous request using `XMLHttpRequest` and logs the response.
function dataFetch(){
    let url = 'https://jsonplaceholder.typicode.com/posts'
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.status === 200 && xhr.readyState === 4){
            console.log(xhr.responseText)
        }
    })
    xhr.send()
}
dataFetch()
