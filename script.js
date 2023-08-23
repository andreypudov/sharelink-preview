function share(url) {
  const data = {
    url: url,
  };
    
  if (navigator.share) {
    navigator.share(data)
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
} 
