const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send(`<h1>Welcome everyone</h1>`);
})

app.get('/products', (req, res, next) => {
  res.send([
    {
      id: 1,
      name: "pumpkin",
      price: .50
    },
    {
      id: 2,
      name: "spaghetti",
      price: 1.75
    }
  ])
});

app.post('products', (req, res, next) => {
  console.log(req.body);
  res.send('success');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});