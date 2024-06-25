function fetchData(url){
    return fetch(url).then(response => response.json())
}
let url1 = "https://api.example.com/data1"
let url2 = "https://api.example.com/data2"
let url3 = "https://api.example.com/data3"

fetchData(url1)
.then(data1 =>{
    // console.log('Data set:', data1)
    return fetchData(url2)
})
.then(data2 => {
    // console.log('Data set:', data2)
    return fetchData(url3)
})
.then(data3 => {
    console.log('Data set:', data3)
})
.catch(error =>{
    console.error('Error occured:', error)
})