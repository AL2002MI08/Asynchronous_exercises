// window.onload = function () {
 
//   //     http.onreadystatechange = function(){

//   //     //     if(http.readyState == 4 && http.status == 200){
//   //     //         console.log(http.response)
//   //     //     }
//   //     // }
//   //     // console.log(http)
//   // }
// // };
// //using ajax rquest using get method
// let http = new XMLHttpRequest();
// http.open("GET", "https://reqres.in/api/users", true);
// http.addEventListener("load", function () {
//   if (http.status === 200 && http.readyState === 4) {
//     const data = JSON.parse(http.responseText);
//     console.log(data.data[0].id, data.data[0].email);
//   } else {
//     throw new Error('error occured!')
   
//   }
// });
// http.send();

// //use post method - create data
// let newUser = {
//     name: 'Alesso',
//     age: '24'
// }
// let req = new XMLHttpRequest()
// req.open('POST',"https://reqres.in/api/users")
// req.setRequestHeader('Content-Type', 'application/json')
// req.addEventListener("load", function () {
//     if (req.status === 201 && req.readyState === 4) {
//       const data = JSON.parse(req.responseText);
//       console.log(data);
//     } else {
//       throw new Error('error occured!')
     
//     }
//   });
 
// req.send(JSON.stringify(newUser))
// //use put method - update existing data
// let user ={
//   name: 'Batman',
//   sidekick: 'Scott'
// }
// let response = new XMLHttpRequest()
// response.open('PUT', "https://reqres.in/api/users/2")
// response.setRequestHeader('Content-Type', 'application/json')
// response.addEventListener('load', ()=>{
//   if(response.status === 200 && response.readyState === 4){
//     const sol = JSON.parse(response.responseText)
//     console.log(sol)
//   }else{
//     throw new Error('Failed to fetch data')
//   }
// })
// response.send(JSON.stringify(user))

//delete method
// let http = new XMLHttpRequest();
// http.open("DELETE", "https://reqres.in/api/users/2", true);
// http.addEventListener("load", function () {
//   if (http.status === 204 && http.readyState === 4) {
//     console.log(http.responseText);
//   } else {
//     throw new Error('error occured!')
   
//   }
// });
// http.send();


//request not initialized - 1
//request is in process -2
//request is sent - 3
//request is complete - 4

var x = 50;
var y= 200
function sum(x, y){
  var total = x+y
  return total
}

var sum1 = sum(x, y)
var sum2 = sum(10, 20)