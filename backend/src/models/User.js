const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user: { 
    type: String, 
    required: true,
    minlength: 2,
    maxlength: 50 
  },
  interests: { 
    type: [String], 
    default: [] 
  },
  age: { 
    type: Number, 
    min: 18, 
    max: 100 
  },
  mobile: { 
    type: Number, 
    required: true 
  },
  email: { 
    type: String, 
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  }
});

module.exports = mongoose.model('User', UserSchema);