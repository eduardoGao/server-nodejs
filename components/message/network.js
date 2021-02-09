const express = require('express')

const router = express.Router()
const response = require('../../network/responses')


router.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send(`Hay un nuevo mensaje: ${req.query.message}`)
})

router.get('/', (req, res) => {
  console.log(req.headers)
  res.header({
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

router.delete('/', (req, res) => {
  if(req.query.text == 'ok') {
    response.error(req, res, 'No se pudo')
  } else {
    response.success(req, res, 'Operación exitosa', 201)
  }
})

module.exports = router;