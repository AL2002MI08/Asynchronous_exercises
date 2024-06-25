// Write a function that chains two Promises together, where the second Promise depends on the result of the first.
function chainPromise(){
    return new Promise((resolve, reject)=>{
        let sum = 12
        if(sum === 12){
            resolve(sum)
        }else {
            reject('not actual sum')
        }
    })
}
chainPromise()
.then(res => res)
.then(res => {
    console.log( res * res)
})