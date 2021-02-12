const express = require('express');
const response = require('../../network/responses');
const controller = require("./controller")

const router = express.Router();


router.get("/", (req, res) => {
  const filterMessages = req.query.user || null;

  controller.getMessages(filterMessages)
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

router.patch("/:id", (req, res) => {
  //console.log(req.params.id)
  //res.send('ok')

  controller.updateMessage(req.params.id, req.body.message)
    .then((data) => response.success(req, res, data, 200))
    .catch((err) => response.error(req, res, 'error interno', 500, err))
  //response.success(req, res, 'Operación exitosa', 201)
})

router.delete("/:id", (req, res) => {
  controller.deleteMessage(req.params.id)
    .then(() => response.success(req, res, `Mensaje: ${req.params.id} ha sido eliminado`, 200))
    .catch((err) => response.error(req, res, 'Error interno', 500, err))
})

module.exports = router;
