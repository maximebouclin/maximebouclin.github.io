function validateForm(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let name = document.getElementById("name").value;
    let favAnimal = document.getElementById("favorite-animal").value;
    let agreeTerms = document.getElementById("agreeTerms").checked; // Corrected this line
    let messagePanel = document.getElementById("message-panel");

    messagePanel.innerHTML = "";

    if (email === "" || name === "" || favAnimal === "") { // Changed agreeTerms to !agreeTerms
        messagePanel.innerHTML = "<p class='error'>Please fill in all fields</p>";
        messagePanel.style.color = "red";
        return false;
    } else if (!email.endsWith("@dal.ca")) {
        messagePanel.innerHTML = "<p class='error'>Email must be a Dalhousie email address</p>";
        messagePanel.style.color = "red";
        return false;
    } else if (favAnimal.length < 6) { // Changed animal name length check from 3 to 6
        messagePanel.innerHTML = "<p class='error'>Animal name must be at least 6 characters long</p>";
        messagePanel.style.color = "red";
        return false;
    } else if (!agreeTerms) { // Removed the () after agreeTerms
        messagePanel.innerHTML = "<p class='error'>Must agree to terms</p>"; // Changed the error message
        messagePanel.style.color = "red";
        return false;
    }

    messagePanel.innerHTML = "<p class='success'>Message submitted successfully!</p>";
    messagePanel.classList.add("success");
    messagePanel.style.color = "green";

    return true;
}
