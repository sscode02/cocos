const express = require('express')
const app = express()
const port = 3000

app.post('/login', (req, res) => {
  console.log(req.body)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})