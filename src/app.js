const express = require('express')

const app = express();

app.get('/test',(req,res) => {
	console.warn(req?.query)
	res.send("This is test")
})

app.get('/test/:userID/:name',(req,res) => {
	console.warn(req.params)
	res.send("This is test/1")
})


const PORT  = 2001

app.listen(PORT,()=>{
	console.log("Your server is running!!");
})