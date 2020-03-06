const express = require('express');
const app1 = express()
const app1_port = 3000;
const app2 = express()
const app2_port = 3001;

app1.get('/', (req, res) => {
    res.send('Welcome to the website!');
});

app1.listen(app1_port, () => console.log(`Express app listening on port ${app1_port}`));

app2.use(express.static('public'));

app2.listen(app2_port, () => console.log(`Express app listening on port ${app2_port}`));
