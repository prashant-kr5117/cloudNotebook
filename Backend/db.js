const mongoose = require("mongoose"); //importing mongoose

const mongoURI =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"; //axising db url

const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI)  
    console.log('Mongo connected')
}
catch(error) {
    console.log(error)
    process.exit()
}
}

  //exporting to use outside the file
  module.exports=connectToMongo;