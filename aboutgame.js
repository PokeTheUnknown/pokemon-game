function navigateToLink(url) {
    document.querySelector('.container').classList.add('fading');
  
    setTimeout(() => {
      window.location.href = url;
    }, 500); // the time lenght of the fading
  }