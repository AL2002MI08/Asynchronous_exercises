// . Write a Promise that resolves with "Success!" after 1 second. Log the result to the console.
// const promise = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('Success!')
//     }, 1000)
// })
// promise
// .then((res)=> console.log(res))
// .catch(error => console.error(error))

const promise = Promise.resolve(setTimeout(()=>{
    console.log('Success!')
},1000))