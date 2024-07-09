window.onload = function() {
    var backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.play();
};

function navigateToLink(url) {
    var buttonSound = document.getElementById("buttonSound");
    var backgroundMusic = document.getElementById("backgroundMusic");
    buttonSound.play();
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // reset the music to the begenning

    // fading
    document.querySelector('.container').classList.add('fading');
  
    setTimeout(function() {
      window.location.href = url;
    }, 500); // the fading delay time
}
