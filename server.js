const express = require('express');
const path = require('path');

const { PORT = 8000 } = process.env;
const app = express();

console.log(process.env);

app.use(express.static('dist'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`\nServer is running on http://127.0.0.1:${PORT} ...\n`);
});
