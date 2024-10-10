// script.js

// Select the section with the background
const section1 = document.getElementById('section1');

// Event listener for mouse movement
document.addEventListener('mousemove', (event) => {
    // Get the width and height of the section
    const { clientWidth: width, clientHeight: height } = section1;

    // Calculate the new background position based on the section size
    const xPos = (event.clientX / width) * 100; // Horizontal position as a percentage
    const yPos = (event.clientY / height) * 100; // Vertical position as a percentage

    // Apply the new background position
    section1.style.backgroundPosition = `${xPos}% ${yPos}%`;
});
