// const getJSON = async function (url) {
//     const response = await fetch(url);
//     // Custom error message
//     if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
//     return await response.json();
//   };
// const get3countries = async function (c1, c2, c3) {
//     try {
//       // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//       // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//       // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
//       // console.log([data1.capital, data2.capital, data3.capital]);
  
//       const data = await Promise.all([
//         getJSON(`https://restcountries.com/v2/name/${c1}`),
//         getJSON(`https://restcountries.com/v2/name/${c2}`),
//         getJSON(`https://restcountries.com/v2/name/${c3}`),
//       ]);
  
//       console.log(data.map(data => data[0].capital));
//     //   console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
  
//   get3countries('benin', 'rwanda', 'portugal')