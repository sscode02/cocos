const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors({
  origin:"*"
}))

let i = 0
app.post('/login', (req, res) => {
  console.log(req.body)
  
  res.json({a:2})
})

app.post('/',(req, res)=>{
  console.log(req.body)
  res.send('1')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})