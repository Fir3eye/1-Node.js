// index.js

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: 'Montserrat', sans-serif;
                    background: linear-gradient(135deg, #ff6b6b, #556270);
                    margin: 0;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    color: #fff;
                }

                .container {
                    text-align: center;
                    padding: 40px;
                    background: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045);
                    border-radius: 10px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
                    animation: popDown 1s ease-out;
                }

                h1 {
                    font-size: 3em;
                    margin-bottom: 20px;
                    color: #fff;
                    opacity: 0; /* Initially set opacity to 0 */
                    animation: fadeIn 1s forwards; /* Fade in animation */
                }

                p {
                    font-size: 1.5em;
                    margin-top: 0;
                    color: #fff;
                }

                @keyframes popDown {
                    0% {
                        transform: translateY(-50px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes fadeIn {
                    to {
                        opacity: 1;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome To <span id="popText">SenDevOps</span></h1>
                <p>Your journey to excellence in software development and operations begins here!</p>
            </div>

            <script>
                // Add JavaScript to trigger pop-down animation after page load
                document.addEventListener('DOMContentLoaded', function () {
                    const popText = document.getElementById('popText');
                    popText.style.animation = 'popDown 1s ease-out';
                });
            </script>
        </body>
        </html>
    `);
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
