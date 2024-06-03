// Optional JavaScript to dynamically change text color
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.responsive-text');

    // Example function to change text color based on a condition
    function changeTextColor(newColor) {
        textElement.style.color = newColor;
    }

    // Example usage: Change color after 2 seconds
    setTimeout(() => {
        changeTextColor('purple');
    }, 2000);
});
