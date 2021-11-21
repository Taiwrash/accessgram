const pa11y = require('pa11y');
const express = require('express')
const cors = require('cors')


const app = express()
const port = 4000 || process.env.PORT
app.use(cors())
app.get('/api/:url', (req, res) => {
 const url = req.url.split('/')[2]
  pa11y(url)
    .then(results => {
      res.status(200).json(results)
    })
    .catch(err => {
      res.send(err)
    })
})

app.listen(port, () => console.log(`API listening on port ${port}!`))