  function navigateToLink(url) {
    var buttonSound = document.getElementById("buttonSound");
    buttonSound.play();
  
    // fading
    document.querySelector('.container').classList.add('fading');
  
    setTimeout(function() {
      window.location.href = url;
    }, 500); // the fading delay time
  }
  