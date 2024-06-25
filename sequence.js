//forEach
getJSON('https://api.example.com').then(function (response) {
  var sequence = Promise.resolve();
  response.results
    .forEach(function (url) {
      sequence = sequence
        .then(function () {
          return getJSON(url);
        })
        .then(thumbPlanet);
    })
    .catch(function (e) {
      console.log(e);
    });
});
//map
getJSON('https://api.example1.com')
.then(function(response){
    response.results.map(function(url){
        getJSON(url).then(thumbPlanet)
    })
})
