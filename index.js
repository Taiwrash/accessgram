const pa11y = require('pa11y');
const express = require('express')
const cors = require('cors')


const app = express()
const port =  process.env.PORT || 4000 
app.use(cors())
app.get('/:url', (req, res) => {
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