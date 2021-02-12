const db = require("mongoose")

db.Promise = global.Promise;

//Función que decide cuando conectarse a la base de datos
async function connect(uri) {
  //Conecction to mongo trough mongoose
  //const uri = "mongodb://db_user_telegrom:hu2jVt3tlhPLbOw6@telegrom1-shard-00-00.hiqwf.mongodb.net:27017,telegrom1-shard-00-01.hiqwf.mongodb.net:27017,telegrom1-shard-00-02.hiqwf.mongodb.net:27017/telegrom1?ssl=true&replicaSet=atlas-9s8b65-shard-0&authSource=admin&retryWrites=true&w=majority"
  await db.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error(`[error] ${err}`))
}

module.exports = connect

