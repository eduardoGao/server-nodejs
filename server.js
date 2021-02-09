const express = require('express')
const app = express()
const port = 3000

//const router = require('./components/message/network')
const router = require('./network/routes')

app.use(express.json())
app.use(express.urlencoded({ extended : false }))

//app.use(router)
router(app);


//Sirviendo estáticos
app.use('/app', express.static('static'))

app.listen(port)

console.log('App escuchando en puerto ' + port)