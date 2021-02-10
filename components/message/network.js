const express = require('express');
const response = require('../../network/responses');
const controller = require("./controller")

const router = express.Router();


router.get("/", (req, res) => {
  //console.log(req.headers)
  res.send('Home 2')
  
})

router.post("/", (req, res) => {
  //controller.module.addMessage
  controller.addMessage(req.body.user, req.body.message)
  response.success(req, res, "Mensaje enviado", 201)
})


router.put("/", (req, res) => {
  
  response.success(req, res, 'Operación exitosa', 201)
})

router.delete("/", (req, res) => {
  if(req.query.text == 'ok') {
    response.error(req, res, 'No se pudo')
  } else {
    response.success(req, res, 'Operación exitosa', 201)
  }
})

module.exports = router;
