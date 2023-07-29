const express = require('express');

const app = express();

const users = ['User 1', 'User 2', 'User 3'];

app.get('/', function (request, response) {
  response.end(`Your method is ${request.method} and path is ${request.path}`);
});

app.get('/users', (req, res) => {

  res.send(users);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});