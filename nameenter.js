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
    saveInput();
    navigateToLink('firstpage.html');
}
