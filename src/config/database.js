const mongoose = require('mongoose')

const connectDB = async () =>{
	await mongoose.connect('mongodb+srv://nagendra:nagendra@cluster0.6ldq1js.mongodb.net/devTinder ')
}

module.exports = connectDB