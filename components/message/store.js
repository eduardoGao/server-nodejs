//const list = []

const db = require("mongoose")
const Model = require("./model")

//mongodb+srv://db_user_telegrom:<password>@telegrom1.hiqwf.mongodb.net/<dbname>?retryWrites=true&w=majority
//mongodb://db_user_telegrom:<password>@telegrom1-shard-00-00.hiqwf.mongodb.net:27017,telegrom1-shard-00-01.hiqwf.mongodb.net:27017,telegrom1-shard-00-02.hiqwf.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-9s8b65-shard-0&authSource=admin&retryWrites=true&w=majority

//Conecction to mongo trough mongoose
db.Promise = global.Promise;
const uri = "mongodb://db_user_telegrom:hu2jVt3tlhPLbOw6@telegrom1-shard-00-00.hiqwf.mongodb.net:27017,telegrom1-shard-00-01.hiqwf.mongodb.net:27017,telegrom1-shard-00-02.hiqwf.mongodb.net:27017/telegrom1?ssl=true&replicaSet=atlas-9s8b65-shard-0&authSource=admin&retryWrites=true&w=majority"
db.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error(`[error] ${err}`))



async function getMessages() {
  //return list;
  const messages = await Model.find()
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

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateMessage,
}