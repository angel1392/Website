const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Serve static files like HTML, CSS, JS
app.use(express.static(__dirname));

// Handle form submission (POST)
app.post('/submit-form', (req, res) => {
    // Log the body to check what is being received
    console.log('Form data received:', req.body);

    const { firstname, email } = req.body;  // Get form data from JSON body

    if (!firstname || !email) {
        return res.status(400).send('Error: First name and email are required.');
    }

    console.log(`Form Submitted: Name - ${firstname}, Email - ${email}`);
    res.send(`Thank you, ${firstname}! Your form was submitted successfully.`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});