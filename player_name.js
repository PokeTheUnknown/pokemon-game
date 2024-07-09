// Function to save the input value to local storage
function saveInput() {
    const inputValue = document.getElementById('userInput').value;
    localStorage.setItem('userInput', inputValue);
}

// Function to navigate to another page
function navigateToLink(url) {
    window.location.href = url;
}

// Combined function to save input and navigate to another page
function saveAndNavigate() {


        var inputValue = document.getElementById('userInput').value;
    
        if (inputValue === "") {
            alert("Please enter your name.");
            return;
        }
    
    var buttonSound = document.getElementById("buttonSound");
    var backgroundMusic = document.getElementById("backgroundMusic2");

    buttonSound.play();
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // reset the music to the beginning

    saveInput();

    setTimeout(function() {
        navigateToLink('day1_page.html');
    }, 500);
}

// play background music when the page loads
window.onload = function() {
    var backgroundMusic = document.getElementById("backgroundMusic2");
    backgroundMusic.play();
}

function playSoundAndGoBack() {
    var buttonSound = document.getElementById("buttonSound");
    buttonSound.play();

    setTimeout(function() {
        history.back();
    }, 500); 
}
