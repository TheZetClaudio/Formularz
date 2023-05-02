const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const port = 8080;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello!');
})

app.post('/register', (req, res) => {
    const { mail, nick, password } = req.body;
    const databaseContent = JSON.parse(fs.readFileSync('database.json', { encoding: 'utf-8' }));
    databaseContent.push({ mail, nick, password });
    fs.writeFileSync('database.json', JSON.stringify(databaseContent), { encoding: 'utf-8' });
    res.send("yupi");
})

app.listen(port, () => {console.log('owo')});