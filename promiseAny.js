const promise1 = Promise.reject("Error in promise 1");
const promise2 = Promise.reject("Error in promise 2");
const promise3 = Promise.reject("Error in promise 3");

Promise.any([promise1, promise2, promise3])
    .then(value => {
        console.log("Resolved with value:", value);
    })
    .catch(error => {
        console.error("All promises were rejected.");
        console.error(error);
        console.error(error.errors);
    });