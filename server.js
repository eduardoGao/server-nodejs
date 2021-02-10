const express = require('express')

//const router = require('./components/message/network')
const router = require('./network/routes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
//app.use("/", router);
router(app);


//Sirviendo estáticos
app.use('/app', express.static('static'))

app.listen(3000)

console.log('App escuchando en puerto 3000')