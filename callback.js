// //ex 1
// function one(second) {
//     second();
//     console.log("function one executes");
//   }
//   function two() {
//     console.log("function two executes");
//   }
//   one(two);
//ex2
//   let order = (product) => {
//     console.log("order received")
//     product()
//   }
//   let production = () => {
//     console.log("production started")
//   }
// order(production);
//ex 3:
let stocks = {
  Fruits: ["pineapple", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["peanuts", "chocolate"],
};

let order = (fruit, product) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit]}`);
    product();
  }, 2000);
};
let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log(`machine was started`);
          setTimeout(() => {
            console.log(`Icecream was placed in a ${stocks.holder[0]}`);
            setTimeout(() => {
              console.log(`I selected the ${stocks.toppings[1]} flavour.`);
              setTimeout(
                () => console.log("Icecream is now ready to be served"),
                2000
              );
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};
order(2, production);
