// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get form values
    const firstname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;

    // Simple client-side validation to ensure both fields are filled
    if (!firstname || !email) {
        alert('Error: First name and email are required.');
        return;  // Stop further processing if validation fails
    }

    // Simulate successful form submission
    alert(`Thank you, ${firstname}! Your form has been submitted successfully.`);

    // Optionally, save the form data to localStorage (this is just an example)
    // This step can be omitted if not needed
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('email', email);

    // Optionally, display the form submission confirmation on the page
    const confirmationMessage = document.createElement('p');
    confirmationMessage.innerHTML = `Thank you, ${firstname}. We have received your email: ${email}.`;
    document.body.appendChild(confirmationMessage);

    // Reset the form after submission
    event.target.reset();
});
