// const promise = new Promise((resolve, reject)=> {
//    return Promise.reject()
// })
// promise
// .then(
//     () => console.log('hello'),
//     () => console.log('hi'),
// )
// .catch(() => console.error('error occured'))


// const promise1 = Promise.resolve(Promise.reject());

const promise2 = Promise.resolve().then(() => {
  return Promise.reject();
});

// const promise3 = Promise.reject().catch(() => {
//   return Promise.reject();
// });
console.log(promise2)