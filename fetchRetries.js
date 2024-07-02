async function fetchDataWithRetry(url, maxRetries) {
    let retries = 0;
  
    while (retries < maxRetries) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data; // Return data if successful
      } catch (error) {
        retries++;
        console.log(`Request failed. Retrying (${retries}/${maxRetries})...`);
        if (retries >= maxRetries) {
          console.log('Error:');
          throw new Error(`Failed after ${maxRetries} retries. Error: ${error.message}`);
        }
      }
    }
  }
  
  // Usage example:
  fetchDataWithRetry('https://jsonplaceholder.typicode.com/posts3', 3)
    .then(data => console.log('Data fetched successfully'))
    .catch(error => console.error(error.message));
  