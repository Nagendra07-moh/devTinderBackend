const express = require('express')
const connectDB = require('./config/database')
const app = express();

const PORT  = 2001

connectDB()
.then(()=>{
	console.log("DB is live!!");

	app.listen(PORT,()=>{
	console.log("Your server is running!!");
    })
})
.catch((err) =>{
	console.log("error->",err);
})

