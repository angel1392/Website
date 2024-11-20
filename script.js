document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    const firstname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;

    if (!firstname || !email) {
        alert('Error: First name and email are required.');
        return;
    }

    // Simulate a successful form submission
    alert(`Thank you, ${firstname}! Your form has been submitted successfully.`);
    event.target.reset();
});
