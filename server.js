const express = require('express');
const app = express();

const path = require('path')
app.use(express.static(path.join(__dirname, 'dist', 'google-hackthon-focus-group-ui', 'browser')));
app.use(express.static(path.join(__dirname, 'dist', 'google-hackthon-focus-group-ui', 'browser', 'assets')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'google-hackathon-focus-group-ui', 'browser', 'index.html'));
});

app.get('/:any', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'google-hackathon-focus-group-ui', 'browser', req.params.any));
});

app.get('/:any/:any2', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'google-hackathon-focus-group-ui', 'browser', req.params.any, req.params.any2));
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});