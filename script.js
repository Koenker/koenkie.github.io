// script.js

// Select the section with the background
const section1 = document.getElementById('section1');

// Event listener for mouse movement
document.addEventListener('mousemove', (event) => {
    // Get the width and height of the window
    const { innerWidth: width, innerHeight: height } = window;

    // Calculate the new background position
    const xPos = (event.clientX / width) * 100; // Horizontal position as a percentage
    const yPos = (event.clientY / height) * 100; // Vertical position as a percentage

    // Apply the new background position
    section1.style.backgroundPosition = `${xPos}% ${yPos}%`;
});
