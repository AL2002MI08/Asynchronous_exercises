async function downloadContents(urls) {
    const promises = urls.map(async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.text();
      return data;
    });
  
    try {
      const results = await Promise.all(promises);
      return results;
    } catch (error) {
      console.error(`Error: ${error.message}`);
      throw error;
    }
  }
  
  // Usage example:
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  
  downloadContents(urls)
    .then(contents => {
      contents.forEach((content, index) => {
        // console.log(`Content from URL ${index + 1}:`);
        console.log(content);
      });
    })
    .catch(error => {
      console.error(`Failed to download contents: ${error.message}`);
    });
  