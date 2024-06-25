const printHelloWorld = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const resolved = Math.random() > 0.5
            if(resolved){
                resolve('Hello World')
            }else{
                reject('Error occured')
            }
        },1000)
    })
printHelloWorld
.then((res) => console.log(res))
.catch((err) => console.error(err))