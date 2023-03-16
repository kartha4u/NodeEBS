const express = require('express')
const app = express()
const port = process.env.PORT || 3000 // Port will be picked by AWS

app.get('/', (req, res) => {
  res.send('Hello World from EBS!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
