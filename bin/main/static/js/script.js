document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    if (form) {
        form.addEventListener("submit", function (e) {
            const email = document.querySelector("input[type='email']").value;
            const password = document.querySelector("input[type='password']").value;
            
            if (!email || !password) {
                e.preventDefault();
                alert("All fields are required.");
            }
        });
    }
});
