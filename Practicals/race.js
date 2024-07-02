const getJSON = async function (url) {
        const response = await fetch(url);
        // Custom error message
        if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
        return await response.json();
      };

(async function () {
    const response = await Promise.race([
      getJSON(`https://restcountries.com/v2/name/italy`),
      getJSON(`https://restcountries.com/v2/name/egypt`),
      getJSON(`https://restcountries.com/v2/name/china`),
    ]);
  
    console.log(response); // The first settled promise
  })();