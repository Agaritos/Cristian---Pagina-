const espress = require('express');
const app = espress();
const router = require ("./routes/router")
const port = 3000;
const cors = require('cors')


app.use(cors())
app.use("/api",router)

app.listen(3000, () => {
  console.log(`Risitas, como te pusiste eso jeanes haces que mi mente maquineeeee${3000}`)
})