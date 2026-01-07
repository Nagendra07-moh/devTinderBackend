const mongoose = require('mongoose')

const connectDB = async () =>{
	if (!process.env.mongoUrl) {
		throw new Error('mongoUrl environment variable is not defined. Please check your .env file.')
	}
	await mongoose.connect(process.env.mongoUrl)
}

module.exports = connectDB