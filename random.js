const newPromise = new Promise(function(resolve, reject){
    const random = Math.floor(Math.random() * 2)
    if(random === 0){
        resolve();
    }else{
        reject();
    }
})
newPromise
.then(()=> console.log('completed successfully!'))
.catch(()=> console.error('error occured!'))