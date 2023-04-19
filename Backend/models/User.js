const mongoose = require("mongoose"); //imported mongoose

//here below is our scheme made by me 
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  date:{
    type:Date.now
  }
  
});
module.exports=mongoose.model('user',UserSchema);