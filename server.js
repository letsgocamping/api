require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = process.env.PORT || 1337;

const app = express();
app.use(express.static(process.env.CLIENT_FOLDER));
app.use(bodyParser.json());

app.post('/api/midpoint', async (req, res) => {
  const options = {
    method: 'POST',
    url: `${process.env.LOCATION_SERVICE}/midpoint`,
    data: req.body
  }
  try {
    const result = await axios(options);
    res.send(result.data)
  } catch (err) {
    console.log('you lost the hackathon', err);
  }
});

app.get('/api/account/:email', async (req, res) => {
  const options = {
    method: 'GET',
    url: `${process.env.ACCOUNT_SERVICE}/account/${req.params.email}`,
    body: req.body
  }
  try {
    const result = await axios(options);
    res.send(result.data)
  } catch (err) {
    console.log('you lost the hackathon', err);
  }
});

app.post('/api/account', async (req, res) => {
  const options = {
    method: 'POST',
    url: `${process.env.ACCOUNT_SERVICE}/account`,
    data: req.body
  }
  try {
    const result = await axios(options);
    res.send(result.data)
  } catch (err) {
    console.log('you lost the hackathon', err);
  }
});

app.get('*', (req, res) => {
  res.sendFile(process.env.CLIENT_FOLDER);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
