// assets/js/_localstorage.js

// Function to apply the CSS from localStorage
function applyLocalStorageCSS() {
    const storedCSS = localStorage.getItem('customCSS');
    const dynamicCSS = document.getElementById('dynamic-css');
    if (storedCSS) {
        dynamicCSS.innerHTML = storedCSS;
    }
}

// Event listener to apply CSS when the button is clicked
//document.getElementById('apply-css-btn').addEventListener('click', applyLocalStorageCSS);

// Apply CSS on page load
applyLocalStorageCSS();
