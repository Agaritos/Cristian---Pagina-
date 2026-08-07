const espress = require('express');
const app = espress();
const port = 3000;

app.get('/ingeniera', (req, res) => {
  res.send('<h1>Hello Cris</h1>')
})

app.listen(3000, () => {
  console.log(`eres el mejor ${3000}`)
})