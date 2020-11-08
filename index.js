const express = require('express');
const bodyParser = require('body-parser');
const localhost = 'http://localhost';
const app1 = express()
const app1_port = 3000;
app1.use(bodyParser.urlencoded({extended: true}));
app1.use(bodyParser.json());


const app2 = express()
const app2_port = 3001;

var router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'hooray! welcome to the api!'});
});

app1.use('/api', router);

app1.listen(app1_port, () => console.log(`Express app listening on port ${localhost}:${app1_port}/api`));

app2.use(express.static('public'));

app2.listen(app2_port, () => console.log(`Express app listening on port ${localhost}${app2_port}`));
