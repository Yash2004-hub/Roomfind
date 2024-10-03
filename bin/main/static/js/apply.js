function selectOption(option) {
    // Display the respective redirect button based on the chosen option
    document.getElementById("redirect-buttons").classList.remove("hidden");
    if (option === "owner") {
        document.getElementById("owner-button").style.display = "inline-block";
        document.getElementById("seeker-button").style.display = "none";
    } else if (option === "seeker") {
        document.getElementById("seeker-button").style.display = "inline-block";
        document.getElementById("owner-button").style.display = "none";
    }
}

function redirectToOwner() {
    // Redirect to Owner application form
    window.location.href = "/apply/owner";
}

function redirectToSeeker() {
    // Placeholder for seeker form (if needed in the future)
    alert("Room Seeker form will be implemented soon.");
}
