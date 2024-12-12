const express = require('express');
const app = express();

app.use(express.json());  // Middleware to parse JSON requests

app.get('/', (req, res) => {
    res.send('Welcome to the Hackathon Backend!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
