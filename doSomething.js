function doSomething(){
    return new Promise((resolve)=>{
      setTimeout(() =>{
        console.log('hello')
        resolve('https://example.com/')
      },200)
    })
  }

  doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);

  console.log(doSomething())