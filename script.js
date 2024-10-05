document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name === "" || email === "") {
        alert("All fields are required!");
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});