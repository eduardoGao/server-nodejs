const express = require('express')
const db = require("./db")

//const router = require('./components/message/network')
const router = require('./network/routes')

//Levantando conexión a db
db("mongodb://db_user_telegrom:hu2jVt3tlhPLbOw6@telegrom1-shard-00-00.hiqwf.mongodb.net:27017,telegrom1-shard-00-01.hiqwf.mongodb.net:27017,telegrom1-shard-00-02.hiqwf.mongodb.net:27017/telegrom1?ssl=true&replicaSet=atlas-9s8b65-shard-0&authSource=admin&retryWrites=true&w=majority")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
//app.use("/", router);
router(app);


//Sirviendo estáticos
app.use('/app', express.static('static'))

app.listen(3000)

console.log('App escuchando en puerto 3000')