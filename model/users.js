const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
  name: {
     type: String,
    required: true
     },
  description: { 
    type: String 
},
  price: { 
    type: Number,
     required: true
     }
});

const userSchema = new mongoose.Schema({
  username: { 
    type: String,
     required: true, 
     unique: true
     },
  email: { 
    type: String, 
    required: true,
     unique: true 
    },
  password: { type: String,
     required: true 
    },
  goods: [goodsSchema], // Embed the goods schema as an array
});

const User = mongoose.model('User', userSchema);

module.exports = User;
