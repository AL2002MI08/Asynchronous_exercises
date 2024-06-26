// B) Create a functional iterator for an array that returns each value of the array when called, one element at a time.
function returnIterator(arr) {
    let i = 0
    function inner(){
      let element = arr[i]
      return element
    }
    return inner
    }
    
    // Uncomment the lines below to test your work
    const array2 = ['a', 'b', 'c', 'd'];
    const myIterator = returnIterator(array2);
    console.log(myIterator()); // -> should log 'a'
    // // console.log(myIterator()); // -> should log 'b'
    // // console.log(myIterator()); // -> should log 'c'
    // // console.log(myIterator()); // -> should log 'd'
    