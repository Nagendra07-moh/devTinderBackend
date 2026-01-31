const mongoose  = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, 'First name is required'], trim: true },
  lastName:  { type: String, required: [true, 'Last name is required'], trim: true },
  emailId: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please provide a valid email address']
  },
  password: { type: String, required: [true, 'Password is required'], minlength: [6, 'Password must be at least 6 characters'] },
  age: { type: Number, min: [0, 'Age must be positive'] },
  gender: { type: String, enum: ['male','female','other'], required: [true, 'Gender is required'] }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema) 