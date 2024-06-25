//javascript program
async function fetchApiData(url, retries){
    try{
        let response = await fetch(url)
        if(response.ok){
            console.log(await response.json())
        }
    }
    catch(error){
        if(retries > 0){
            retries--
            fetchApiData(url, retries)
        }
        console.error(error)
    }
    console.log(retries)
}
fetchApiData("https://jsonplaceholder.typic8de.com/posts", 3)



