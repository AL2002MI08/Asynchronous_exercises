// Create a Promise that resolves with "Data fetched" after 1 second and log the message when it resolves.
const promise = new Promise((resolve)=>{
    let time = 1
    if(time === 1){
        setTimeout(()=>{
            resolve('Data fetched')
        },1000)
    }else {
        throw new Error('No data found')
    }
    
})
promise
.then(res => console.log(res))
.catch(err => console.error(err))