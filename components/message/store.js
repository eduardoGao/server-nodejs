//const list = []

const Model = require("./model")

async function getMessages(filterUser) {
  let filter = {};
  
  if(filterUser !== null) {
    //filter = { user: filterUser }
    filter.user = new RegExp(filterUser, "i")
  }
  
  const messages = await Model.find(filter)
  return messages;
}

function addMessage(message) {
  //list.push(message)
  const myMessage = new Model(message)
  myMessage.save()
}

async function updateMessage(id, message) {
  const findMessage = await Model.findOne({
    _id: id,
  })

  findMessage.message = message
  const newMessage = await findMessage.save()
  return newMessage
}

function deleteMessage(id) {
  return Model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateMessage,
  delete: deleteMessage,
}