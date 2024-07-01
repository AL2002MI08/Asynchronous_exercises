fetch("https://handlers.education.launchcode.org/static/weather.json")
.then((res) =>{
    return res.json()
 })
 .then((data)=>{
    console.log(data)
 })
 .catch(error =>{
    console.error(error)
 })