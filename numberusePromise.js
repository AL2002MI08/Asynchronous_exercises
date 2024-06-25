const promise = async (n) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(n);
        },1000)
    })
}
// promise(1)
// .then((res)=> console.log(res))
// promise(2)
// .then((res) => console.log(res))
let numbers = 1;
function print(){
    promise(numbers)
    .then((res)=> {
        console.log(res);
        numbers++;
        if(numbers<=5){
            setTimeout(print,1000)
        }
    })
}
print()
