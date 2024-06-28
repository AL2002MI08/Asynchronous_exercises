// Implement a function performFastAsync() that sends a GET request to a specified API endpoint, simultaneously initiates a timer with a given delay, and cancels either the request or timer based on which one finishes first. 

// The function will accept two parameters: the URL of the API endpoint to send a request to and the number of seconds (in milliseconds) to delay the timer.

// The desired behavior involves two possible outcomes:
// - If the request successfully completes before the timer runs out, the function should cancel the timer and return a promise that resolves with the data obtained from the request.

// - if the timer expires before the request finishes, the function should cancel the ongoing request and return a promise that resolves with an empty array.

async function performFastAsync(url,time){
let controller = new AbortController()
const signal = controller.signal
let timeId

let p = new Promise((resolve) => {
        timeId = setTimeout(()=>{
            resolve([])
            controller.abort()
        },time)
        
    })
    console.log(timeId)

const promise = await Promise.race([fetch(url, {signal})
    .then((data)=> {
        clearTimeout(timeId)
        return data.json()
    })
    
    , p])
    console.log(timeId)
return promise
}

performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 9000)
.then((data) => {
	console.log(data)
})  

// performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 10)
// .then((data) => {
// 	console.log(data)
// })