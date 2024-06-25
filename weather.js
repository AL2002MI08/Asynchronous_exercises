window.addEventListener('load', ()=>{
    fetch('https://handlers.education.launchcode.org/static/weather.json')
    .then(response =>console.log(response))
    .catch(error => console.error('error occured'))
})
let weather = 
    {
        "temp": 67,
        "windSpeed": 5,
        "tempMin": 50,
        "tempMax": 71,
        "status": "Sunny",
        "chanceOfPrecipitation": 20,
        "zipcode": 63108
     }
let options = {
    method: 'POST',
}
