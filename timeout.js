async function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController();
    const { signal } = controller;
  
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);
  
    try {
      const response = await fetch(url, { signal });
      clearTimeout(timeoutId);
      const data = await response.json();
     console.log(data)
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timed out.');
      } else {
        throw error;
      }
    }
  }
  
  // Usage example:
//   fetchDataWithTimeout('https://api.example.com/data', 50)
//     .then(data => {
//       console.log('Data:', data);
//     })
//     .catch(error => {
//       console.error('Error:', error.message);
//     });
  
  // Usage example:
  fetchDataWithTimeout('https://jsonplaceholder.typicode.com/posts/1',50)