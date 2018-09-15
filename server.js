require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const port = process.env.PORT || 1337;

const app = express();

app.use(express.static(process.env.CLIENT_FOLDER));
app.use(bodyParser.json());

app.get('/api/midpoint', async (req, res) => {
  const options = {
    method: 'GET',
    url: process.env.LOCATION_SERVICE,
    body: req.body
  }
  try {
    const result = await axios(options);
  } catch (err) {
    console.log('you lost the hackathon', err);
  }
});

app.get('/api/account', (req, res) => {
  const options = {
    method: 'GET',
    url: process.env.ACCOUNT_SERVICE,
    body: req.body
  }
  try {
    const result = await axios(options);
  } catch (err) {
    console.log('you lost the hackathon', err);
  }
});

app.post('/api/account', (req, res) => {
  const options = {
    method: 'POST',
    url: process.env.ACCOUNT_SERVICE,
    body: req.body
  }
  try {
    const result = await axios(options);
  } catch (err) {
    console.log('you lost the hackathon', err);
  }
});