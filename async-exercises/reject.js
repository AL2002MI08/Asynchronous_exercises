// 5. Create a Promise that rejects with "Error!" after 2 seconds. Handle the error using `.catch()`.
// const reject = Promise.reject(setTimeout(()=>{
//     console.log('Error!')
// },2000))
// reject.catch(err => console.log(err))
const reject = new Promise((resolve,reject) =>{
    setTimeout(()=> resolve('Error!'),2000)
})
reject
.then((res)=> console.log(res))
.catch(err => console.log(err.message))