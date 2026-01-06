const express = require('express')
require('./config/database')
const app = express();


const PORT  = 2001

app.listen(PORT,()=>{
	console.log("Your server is running!!");
})