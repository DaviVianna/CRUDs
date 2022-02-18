const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
const cors = require('cors');
app.use(cors());


//Main Route Files
const routeIndex = require('./src/Routes/index');


app.use('/', routeIndex);
app.use(express.static('public') );






//Server Running on port 3000

app.listen(3000, () => {

    console.log('API running on port 3000.');

});