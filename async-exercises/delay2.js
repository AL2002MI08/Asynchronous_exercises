// Create a JavaScript Promise that, after a delay of 2 seconds, either resolves with the message "Hello World" or rejects with the error message "Error occurred".

// The outcome (resolve or reject) should be determined by a random condition, ensuring a 50/50 chance of either occurring each time the code runs.

function delay(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            //do this or
            // const random = Math.floor(Math.random() * 2)
            // if(random === 0){
            //     resolve('Hello World')
            // }else{
            //     reject()
            // }
            //or
            const random = Math.random() < 0.5
            if(random){
                resolve('Hello World')
            }else{
                reject('Error occured!')
            }
        },2000)
    })
}
delay()
.then((res)=> {
    console.log(res)
})
.catch((error)=> console.error('Error:', error))