// async function production(){
//     try{
//         await icecream()
//     }
//     catch(error){
//         console.log('error occured', error)
//     }finally {
//         console.log('execution completed')
//     }
// }
// production()

let stocks = {
    Fruits: ["pineapple", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["peanuts", "chocolate"],
  };

const selection = ()=> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('what would you like to be served?'))
        },2000)
    })
}

async function preOrder(){
console.log("chocolate")
console.log("lemon flavour")
// await selection()
console.log("strawberry")
console.log("vanilla")
console.log("mango flavour")

}

preOrder()

console.log('place other orders')