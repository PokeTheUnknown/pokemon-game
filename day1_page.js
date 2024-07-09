// firstpage.js
function navigateToLink(url) {
    var buttonSound = document.getElementById("buttonSound");
    buttonSound.play();
    buttonSound.onended = function() {
        window.location.href = url;
    };
}


function playSoundAndGoBack() {
    var buttonSound = document.getElementById("buttonSound");
    buttonSound.play();

    setTimeout(function() {
        history.back();
    }, 500); }