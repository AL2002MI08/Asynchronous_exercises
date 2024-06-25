const promise = new Promise((resolve, reject) => resolve()) 
promise
  .then(() => {
 console.log('first')
})
.then(() => {
  return new Promise((resolve) =>{
    setTimeout(() =>{
    console.log('second')
      resolve();
  },10000)
})
  })
.then(() => {
  setTimeout(() =>{
    console.log('third')
  },1000)
})
.catch(() => {
  console.log('error', error)
})