// Using Promises, write a function that makes two API requests in parallel and logs both results.
async function requests(){
    const promise1 =  fetch('https://jsonplaceholder.typicode.com/todos/1')
    const promise2 =  fetch('https://jsonplaceholder.typicode.com/todos/2')
    const data = await Promise.all([promise1, promise2])
    
     
    const dat = await Promise.all(data.map(res =>  res.json()))
return (dat)
    


}

requests().then(data => console.log(data))

