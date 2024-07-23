const express = require('express');
const app = express();
const port = 3000;

// Example asynchronous function that simulates saving data to a database
function saveToDatabase(data) {
    return new Promise((resolve, reject) => {
        // Simulating saving data to database with a delay of 1 second
        setTimeout(() => {
            // Assuming saving to database is successful
            resolve('Data saved successfully');
        }, 1000);
    });
}

app.get('/api/data', async (req, res) => {
    try {
        const data = {
            message: 'This is your API response',
            timestamp: new Date()
        };
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/create', async (req, res) => {
    try {
        // Simulating receiving data from a POST request
        const postData = req.body;

        // Saving data to the database asynchronously
        const result = await saveToDatabase(postData);

        // Sending response after data is saved
        res.json({ message: result });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
