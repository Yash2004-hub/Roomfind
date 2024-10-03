// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add a simple fade-in animation to the success message
    const message = document.querySelector('.container h1');
    message.classList.add('fade-in');

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
