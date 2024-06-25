let stocks = {
    Fruits: ["pineapple", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["peanuts", "chocolate"],
  };

  let shop_is_open = true;
  function order(time){
    return new Promise((resolve, reject) => {
        if(shop_is_open){
            setTimeout(resolve, time)
        }else {
            reject(console.log('shop is closed'))
        }
    })
  }

  async function preOrder(){
    try {
        await order(2000)
        console.log(`${stocks.Fruits[2]}`)
    } catch (error) {
        console.log('error occured', error)
    }
    finally{
        console.log('day ended')
    }
  }

  preOrder()