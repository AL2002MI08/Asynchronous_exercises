function createFlow(arr){
    let i = 0;
    let inner = {
        next: function(){
            let element = arr[i]
            i++
            return element
        }
    }
    return inner
}


let nextElement = createFlow([4,5,6])
let first = nextElement.next()
console.log(first);
let second = nextElement.next()
console.log(second);


