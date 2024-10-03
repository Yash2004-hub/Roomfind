// scripts.js

// Functionality to switch images every 10 seconds
const images = document.querySelectorAll('.hero-images img');
let currentIndex = 0;

function switchImage() {
    // Remove 'active' class from current image
    images[currentIndex].classList.remove('active');

    // Increment index to point to the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Add 'active' class to the new current image
    images[currentIndex].classList.add('active');
}

// Set interval to change image every 10 seconds (10000 ms)
setInterval(switchImage, 10000);
