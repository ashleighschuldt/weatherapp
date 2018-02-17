require('dotenv').config();

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const wc = require('./weather_controller');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/weather/:state/:city", wc.read);
app.put('/api/weather/:city', wc.read);

const port = process.env.PORT || 8080;
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});