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
    // console.log(retries)
}
fetchApiData("https://jsonplaceholder.typicde.com/posts", 3)



