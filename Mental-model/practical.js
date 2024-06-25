// Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

let url = 'https://jsonplaceholder.typicode.com/posts'
async function fetchData(){

    try {
        // let controller = new AbortController()
        // setTimeout(()=> controller.abort(),400)
        // let signal = controller.signal
        // clearTimeout(timeout)
        let response = await fetch(url, {
            signal: AbortSignal.timeout(10)
            // signal: AbortSignal.timeout(10)
        })
        const data = await response.json()
        console.log(data)
        
    } catch (error) {
        console.log('error:', error.message)
    }
    
}
fetchData()