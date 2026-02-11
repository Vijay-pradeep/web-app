const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send("Hello from Backend");
});

app.listen(3000);
