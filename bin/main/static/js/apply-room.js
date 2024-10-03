document.addEventListener('DOMContentLoaded', () => {
    const roomForm = document.querySelector('#roomForm');
    
    // Validate room form before submission
    roomForm.addEventListener('submit', (event) => {
        const roomNumber = document.querySelector('#roomNumber').value.trim();
        const city = document.querySelector('#city').value.trim();
        const ownerId = document.querySelector('#ownerId').value.trim();

        // Check for required fields
        if (!roomNumber || !city) {
            event.preventDefault();
            alert("Room number and City are required fields!");
            return;
        }

        // Check if ownerId is present
        if (!ownerId) {
            event.preventDefault();
            alert("Owner ID is missing. Please go back and try again.");
            return;
        }
    });
    
    // Preview uploaded room images
    const roomImageInput = document.querySelector('#roomImages');
    const roomImagePreview = document.querySelector('#roomImagePreview');

    roomImageInput.addEventListener('change', () => {
        roomImagePreview.innerHTML = '';  // Clear previous preview images
        const files = roomImageInput.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                img.style.height = '80px';
                img.style.margin = '5px';
                roomImagePreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
});
