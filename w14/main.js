async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      renderData(data);
    } catch (error) {
      handleErrors(error)
      console.log(`ERROR: Could not display ${error}`)
    }
  }
  
  function renderData(data) {
    const result = document.getElementById('result');
    data.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.url;
      result.appendChild(img);
    });
  }

  fetchData();
