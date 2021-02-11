const store = require("./store")

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if(!user || !message) {
      console.error("[messageController] No hay mensaje o usuario ")
      reject('Los datos están incompletos')
    }
    
    const fullMessage = {
      "user": user,
      "message": message,
      "time": new Date(),
    }
    //console.log(fullMessage)
    store.add(fullMessage)
    resolve(fullMessage)
  }) 
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if(!id || !message) {
      reject('Invalid data')
      return false;
    }

    const result = await store.updateText(id, message)
    resolve(result)
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
}