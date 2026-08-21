const espress = require('express');
const app = espress();
const router = require ("./routes/router")
const port = 3000;

app.use("/api",router)

app.listen(3000, () => {
  console.log(`eres el mejor ${3000}`)
})