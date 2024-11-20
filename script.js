document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();  // Prevent form submission

    // Get form data
    const formData = {
        firstname: document.getElementById('fname').value,  // Get first name
        email: document.getElementById('email').value,      // Get email
    };

    // Log form data to the console for debugging
    console.log('Form Data:', formData);

    try {
        // Send form data to the server as JSON
        const response = await fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Ensure it's JSON
            },
            body: JSON.stringify(formData),  // Send the form data as JSON
        });

        if (response.ok) {
            const message = await response.text();  // Get the server response
            alert(message);  // Show success message
            event.target.reset();  // Reset the form after submission
        } else {
            const errorMessage = await response.text();
            alert(`Error: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit form. Please try again.');
    }
    console.log('Form submitted! This is a placeholder because GitHub Pages cannot handle server requests.');

});
