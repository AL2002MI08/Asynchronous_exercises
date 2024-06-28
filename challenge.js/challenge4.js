async function fetchData(){
    console.log('me first')
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const res = await data.json()
    console.log('me second')
    console.log(res)
}

fetchData()
console.log('end')