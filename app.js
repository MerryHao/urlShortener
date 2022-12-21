const express = require('express')
const exhbs = require('express-handlebars')
const methodOverride = require('method-override')
require('./config/mongoose')
const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exhbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.get('/', (req, res) => {
  res.send('hi')
})

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})