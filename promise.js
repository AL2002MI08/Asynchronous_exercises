let stocks = {
    Fruits: ["pineapple", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["peanuts", "chocolate"],
  };

  const promise = (time, work) => {
    let is_open_true = true;
return new Promise ((resolve, reject)=>{
    if(is_open_true){
        setTimeout(()=>{
            resolve(work());
        },time)
    }else{
        reject(console.log('shop was closed'))
    }
})
  }
  promise(2000, ()=> console.log(`${stocks.Fruits[0]} was selected`))
  .then(()=> {
    return promise(0, ()=> console.log('order was made'))
  })
  .then(()=> {
    return promise(2000, ()=> console.log("fruit has been chopped"))
  })
  .then(()=> {
    return promise(1000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
  })
  .then(()=> {
    return promise(1000, ()=> console.log(`machine was started`))
  })
  .then(()=> {
    return promise(2000, ()=> console.log(`Icecream was placed in a ${stocks.holder[0]}`))
  })
.then(()=> {
    return promise(2000, ()=> console.log(`I selected the ${stocks.toppings[1]} flavour.`))
})
.then(()=> {
    return promise(3000, ()=> console.log("Icecream is now ready to be served"))
})
.catch(() => console.error('error'))
.finally(()=>{
console.log(`production completed we are finished for the day`)
})
