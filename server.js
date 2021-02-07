const express = require('express')
const response = require('./network/responses')

const router = express.Router()

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(router)

router.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send(`Hay un nuevo mensaje: ${req.query.message}`)
})

router.get('/', (req, res) => {
  console.log(req.headers)
  res.send({
    "custom-header": "Mi propio header",
  })
})

router.put('/', (req, res) => {
  //res.status(202).send({
    //'error': null,
    //'body': 'Acción concretada'
  //})
  response.success(req, res, 'Operación exitosa', 201)
})

router.delete('/fail', (req, res) => {
  if(req.query.text == 'ok') {
    response.error(req, res, 'No se pudo')
  } else {
    response.success(req, res, 'Operación exitosa', 201)
  }
})

//Sirviendo estáticos
app.use('/app', express.static('static'))

app.listen(port)

console.log('App escuchando en puerto ' + port)