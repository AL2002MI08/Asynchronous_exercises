const promise = new Promise((resolve, reject)=>{
    reject('one error')
})
promise.catch(error =>{
    console.log(error)
})
.then((res)=>{
console.log(res)
})