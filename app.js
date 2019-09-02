// 載入
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkEmailPassword = require('./check')
const userList = require('./userList.json')
const app = express()

//port
const port = 3000

// set use、engine
app.use(bodyParser.urlencoded({ extended: true }))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set route
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const inputUser = req.body
  const results = checkEmailPassword(inputUser, userList)

  if (results !== undefined) {
    const firstName = results.firstName
    res.render('login', { firstName })
  } else {
    const warningA = 'on'
    res.render('index', { warningA })
  }
})

// listen server
app.listen(port, () => {
  console.log(`This server start for http://localhost${port}`)
})
