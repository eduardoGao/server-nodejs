const express = require('express');
const response = require('../../network/responses');
const controller = require("./controller")

const router = express.Router();


router.get("/", (req, res) => {
  controller.getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200)
    })
    .catch(err => {
      response.error(req, res, 'No hay registros', 500, err)
    })
})

router.post("/", (req, res) => {
  //controller.module.addMessage
  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201)
    })
    .catch((err) => {
      response.error(req, res, 'Información invalida', 400)
      console.error(err)
    })
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
