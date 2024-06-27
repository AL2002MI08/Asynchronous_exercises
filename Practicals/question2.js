// Use the async/await syntax to fetch vehicle manufacturers’ data from the given API endpoint. After fetching, filter the results and log to the console only manufacturers whose Country is equal to "UNITED STATES (USA)"
async function fetchData(){
try {
    let data = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2')
    let response = await data.json()
    let res = response.Results.filter(e => e['Country'] === 'UNITED STATES (USA)')
    // console.log(res)
    console.log(res);
   
} catch (error) {
    console.error(error)
}
}
fetchData()