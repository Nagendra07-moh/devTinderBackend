const mongoose = require('mongoose')

const connect = async () =>{
	await mongoose.connect('mongodb+srv://nagendra:nagendra@cluster0.6ldq1js.mongodb.net/')
}

connect()
.then(()=>{
	console.log("Database is connected!!")
})
.catch((err) => {
	console.log("error while connection db",err)
})