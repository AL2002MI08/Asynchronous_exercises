// A) Create a for loop that iterates through an array and returns the sum of the elements of the array.

function sumFunc(arr) {
  let sum = 0
for(let i = 0; i< arr.length; i++){
  sum += arr[i]
}
  return sum
}

// Uncomment the lines below to test your work
 const array = [1, 2, 3, 4];
 console.log(sumFunc(array)); // -> should log 10