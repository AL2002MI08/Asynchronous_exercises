// Write a function fetchWithRetry that attempts to fetch data from a given URL. If the fetch fails, it should retry up to 3 times with an exponential backoff (i.e., wait 1s before the first retry, 2s before the second retry, 4s before the third retry). If all attempts fail, it should throw an error.
async function fetchDataWithRetry(url,delay,maxeRetries){
    let count = 0 
    while(count<= maxeRetries){
    try {
        let response = await fetch(url)
        if (!response.ok) throw new Error('fetch failed at, ',url)
            return await response.json()
    } catch (error) {
        if(count == maxeRetries) throw new Error('Maximum retries reached')
        console.log("REtrying...",count+1);
        let retryDelay = delay * Math.pow(2,count)
        await new Promise( resolve => setTimeout(()=> resolve(),retryDelay))
        count++
    }
}
}

fetchDataWithRetry("https://jsonplaceholder.typicde.com/posts",1000, 3).then(data => console.log(data)).catch(err => console.log(err))
