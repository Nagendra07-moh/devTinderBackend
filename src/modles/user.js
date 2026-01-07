const mongoose  = require('mongoose')
// model vs schema ?

const useSchema = new  mongoose.Schema({
	firstName:String,
	lastName:String,
	emailId:String,
	password:String,
	age:Number,
	gender:{
		type:String,
		enum:["male","female","other"]
	}
})


module.exports = mongoose.model("User",useSchema) 