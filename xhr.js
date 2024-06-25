function reqListener() {
    console.log(this.responseText);
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("readystatechange", (event) => {
    if(req.status === 200 && req.readyState === 4){
        console.log(event)
    }
  });
  req.open("GET", "https://api.agify.io?name=meelad");
  req.send();