
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way


    const firstname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;


    if (!firstname || !email) {
        alert('Error: First name and email are required.');
        return;  // Stop further processing if validation fails
    }


    alert(`Thank you, ${firstname}! Your form has been submitted successfully.`);

 
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('email', email);

 
    const confirmationMessage = document.createElement('p');
    confirmationMessage.innerHTML = `Thank you, ${firstname}. We have received your email: ${email}.`;
    document.body.appendChild(confirmationMessage);


    event.target.reset();
});
