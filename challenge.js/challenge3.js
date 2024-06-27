function requestWhenDone(value){
    iterator.next(value)
}
function*fetchData(){
    const data = yield fetch('https://jsonplaceholder.typicode.com/posts')
    const res = yield data.json()
    console.log(res)
}

const iterator = fetchData()
const response = iterator.next().value
response.then(res =>{
    iterator.next(res).value.then(requestWhenDone)
})
