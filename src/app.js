const express = require('express')

const app = express();

app.use('/home',(req,res,next)=>{
	console.log("App.use() ran!!")
	next();
})

app.all('/home/user',(req,res,next) =>{
	console.log("App.all() ran!!")
	next()
})

app.get("/home/user",(req,res) =>{
	res.send('Hello world!!!')
})





const PORT  = 2001

app.listen(PORT,()=>{
	console.log("Your server is running!!");
})