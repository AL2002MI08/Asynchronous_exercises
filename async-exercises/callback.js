// 2. Create a function that takes a callback and executes it after 3 seconds using `setTimeout`.
function callback(){
    console.log('hi')
}
function threeSeconds(callback){
    setTimeout(()=> {
        callback()
    },3000)
}
threeSeconds(callback)