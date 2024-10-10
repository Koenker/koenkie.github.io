document.addEventListener('mousemove', (e) => {
    const landingSection = document.querySelector('.landing');
    
    // Get mouse position relative to the window
    const mouseX = e.clientX / window.innerWidth; // value between 0 and 1
    const mouseY = e.clientY / window.innerHeight; // value between 0 and 1

    // Calculate background position based on mouse position
    const xPos = (mouseX * 100) - 50; // Range from -50 to 50
    const yPos = (mouseY * 100) - 50; // Range from -50 to 50

    // Update background position
    landingSection.style.backgroundPosition = `${xPos}% ${yPos}%`;
});
