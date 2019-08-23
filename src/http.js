const request = async (url, options) => {
  const response = await fetch(url, options)
    .then(response => {
      if(Math.floor(response.status / 100) !== 2) {
        return Promise.reject(response);
      }
      return response.json();
    });
    return response;
};

export default request;