// You need to implement a task queue that processes asynchronous tasks with a maximum concurrency of 3. Write a function taskQueue that accepts an array of tasks (functions returning Promises) and processes them with the specified concurrency.
console.log('start')
setTimeout(()=>{
    console.log('hu')
})
Promise.reject(reject => setTimeout(()=> {
    reject('hi')
},200)).catch(err => console.error(err))

Promise.resolve(resolve => resolve('first promise')).then(data => console.log(data))
console.log('end')
