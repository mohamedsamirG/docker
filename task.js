const express = require('express');
const app = express();
const port = 4200; 
app.get('/', (req, res) => {
  res.send('created successfully');
});

app.listen(port, () => {
  console.log(`the program is already working`);
});
