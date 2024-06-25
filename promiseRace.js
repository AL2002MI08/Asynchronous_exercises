async function fetchFastestData() {
    const url1 = 'https://api.example.com/data1';
    const url2 = 'https://api.example.com/data2';
    const url3 = 'https://api.example.com/data3';
  
    try {
      const fastestData = await Promise.race([
        fetchData(url1),
        fetchData(url2),
        fetchData(url3)
      ]);
  
      console.log('Fastest data received:', fastestData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  console.log(fetchFastestData());