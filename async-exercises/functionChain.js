const value = 5;
const promise1 = (value) => new Promise((resolve)=> resolve(value * 2))
const promise2 = (value) => new Promise((resolve)=> resolve(value + 10))
const promise3 = (value) => new Promise((resolve)=> resolve(value * 3))
promise1(value)
.then(promise2)
.then(promise3)
.then(res => console.log(res))

