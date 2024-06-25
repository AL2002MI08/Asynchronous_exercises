//create a function createAlarm that generates wake-up message for a person after a specified delay. This function should accept two parameters, person's name and the delay time in seconds. Function should return a promise that resolves with a wake-up message but if delay is less than 2 seconds, the promise should immediately reject with an error message
//createAlarm("john", 4).then(message)=>{
    // console.log(message)}
    //.catch((error) => {
    //     console.error
    // })

const createAlarm = (name, time) =>{
    return new Promise((resolve, reject) => {
        if(time > 2){
            setTimeout(()=> {
                resolve(`Wake up ${name} after ${time} seconds`);
            }, time * 1000)
        }else{
            reject('Delay is not sufficient')
        }
    })
}
createAlarm('John', 4).then((message)=>{
    console.log(message)
})
.catch((error)=> {
    console.error(error)
})
createAlarm('John', 1).then((message)=>{
    console.log(message)
})
.catch((error)=> {
    console.error(error)
})