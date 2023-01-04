const express = require('express')
const exhbs = require('express-handlebars')
require("./config/mongoose")
const URL = require('./models/URL')
const shortenUrlGenerator = require('./utilities/generateUrl')
const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exhbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})