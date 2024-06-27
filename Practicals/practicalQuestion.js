// Implement a function called repeatEvery() that takes another function and a time interval (in milliseconds) as arguments. This function should execute the given function repeatedly at the specified time interval until manually stopped.
function callback(arr){
    return arr
}
function repeatEvery(callback, time){
setInterval(() => {
    console.log(callback([1,2,3]))
},time)

}
console.log(repeatEvery(callback, 1000))


// function callback(arr){
//     return arr
// }
// function repeatEvery(callback, time){
// setInterval(() => {
//     console.log(callback([1,2,3]))
// },time)

// }
// repeatEvery(callback, 1000)