const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise((_, reject) =>{
setTimeout(reject,200, 'foo')
})

Promise.all([promise1, promise2, promise3])
.then(values => console.log(values))
.catch(function(e){
    console.error('error occured')
})

//doesn't settle if one of the input promises rejects