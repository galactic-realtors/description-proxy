const express = require('express')
const app = express()

app.use(express.static('./'))

app.get('/', (req, res) => {
  //db.seed();
  res.send('index.html')
})
//this could be a proxy server, it needs to ge the request from my services server
//need to set that up, define an api, which will grab data from the database

app.listen(5000, () => console.log('Server running on port 5000'))