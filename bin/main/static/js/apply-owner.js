// JavaScript for apply-owner.html

document.addEventListener('DOMContentLoaded', () => {
    const ownerForm = document.querySelector('#ownerForm');
    
    // Validate form before submission
    ownerForm.addEventListener('submit', (event) => {
        const name = document.querySelector('#ownerName').value.trim();
        const phone = document.querySelector('#ownerPhone').value.trim();
        
        if (!name || !phone) {
            event.preventDefault();
            alert("Name and Phone number are required!");
        }
    });
    
    // Preview uploaded image
    const imageInput = document.querySelector('#ownerImage');
    const imagePreview = document.querySelector('#imagePreview');
    
    imageInput.addEventListener('change', () => {
        const file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                imagePreview.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });
});
