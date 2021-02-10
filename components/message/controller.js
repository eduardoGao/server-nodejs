
function addMessage(user, message) {
  const fullMessage = {
    "user": user,
    "message": message,
    "time": new Date(),
  }
  console.log(fullMessage)
}

//exports.module = {
//  addMessage,
//}

module.exports = {
  addMessage,
}