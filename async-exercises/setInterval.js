// Using `setInterval`, write a function that logs "Tick" to the console every second.
function tick(){
    let count = 0
   const timeout = setInterval(()=> {
        count++
        console.log('Tick')
        if(count ===6) clearInterval(timeout)
    },1000)
}
tick()