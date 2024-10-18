const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

  username:{
   type: String,
   required: [true, "username required"],
   unique: true
  },
  email: {
    type: String,
    required: [true, "email required"],
    uunique: true
  }

});

const User = mongoose.model("user", userSchema);


module.exports = User
