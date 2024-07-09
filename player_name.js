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
    var buttonSound = document.getElementById("buttonSound");
    buttonSound.play();
    saveInput();

    setTimeout(function() {
        navigateToLink('day1_page.html');
    }, 500);
}
