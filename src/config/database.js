const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () =>{
	if (!process.env.mongoUrl) {
		throw new Error(process.env.mongoUrl)
	}
	await mongoose.connect(process.env.mongoUrl)
}

module.exports = connectDB