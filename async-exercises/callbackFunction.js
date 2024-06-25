// Create a simple callback function that multiplies two numbers and then calls a callback with the result.
function callback(a,b){
    return a * b
}
function multiplyNumbers(callback){
return callback
}

const result = multiplyNumbers(callback)
console.log(result(5,5))
