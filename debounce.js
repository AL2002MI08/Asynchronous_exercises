// Scenario:
// Implement a debounce function that returns a Promise. The function should only execute the callback after it has not been called for a specified delay.
function debounce(func,delay=500){
    let timeout;
    return function(...args){
        clearTimeout(timeout)
        timeout = setTimeout(()=> func.apply(this,args),delay)
    }
}

function logMessage(){
    return new Promise(resolve => resolve('hello')).then(res => console.log(res))
}

const runData = debounce(logMessage)

runData()
runData()
runData()
runData()
runData() 
