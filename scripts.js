// Reference to the main container and section 3
const container = document.querySelector('.container');
const section3 = document.getElementById('section3');

// Toggle snap on or off based on scroll position in section 3
section3.addEventListener('scroll', () => {
    const atTop = section3.scrollTop === 0;
    const atBottom = section3.scrollHeight - section3.scrollTop === section3.clientHeight;

    // Disable snapping when scrolling within Section 3
    if (!atTop && !atBottom) {
        container.style.scrollSnapType = 'none';
    } else {
        container.style.scrollSnapType = 'y mandatory';
    }
});
