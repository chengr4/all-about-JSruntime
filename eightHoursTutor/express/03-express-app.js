const express = require('express');
const path = require('path');
const app = express();

// set up static and middleware
// for static resources (server does not need to change)
// app.use(express.static('XXXX'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// get, post, delete, put
app.all("*", (req, res) => {
  res.status(404).send('Page not found');
})

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});