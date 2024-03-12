const express = require('express');
const app = express();
const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;
const password = 'qwerty';

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Home page</h1>`);
});

app.get('/:echo', (req, res) => {
    res.send(`<h1>${req.params.echo}</h1>`);
});

app.get('/encode/:text', (req, res) => {
    const encodeText = Vigenere.Cipher(password).crypt(req.params.text);
    res.send(encodeText);
});

app.get('/decode/:text', (req, res) => {
    const decodeText = Vigenere.Decipher(password).crypt(req.params.text);
    res.send(decodeText);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});