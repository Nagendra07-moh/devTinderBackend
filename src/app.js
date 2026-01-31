 
const express = require('express')
const connectDB = require('./config/database')
require('dotenv').config()
const app = express();

app.use(express.json());

const User = require('./modles/user')

app.post('/addUser', async (req, res) => {
  try {

    const user = new User(req.body)

    await user.validate()

    const saved = await user.save()
    res.status(201).json({ message: 'User created', user: saved })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message)
      return res.status(400).json({ errors })
    }
    // Duplicate key (unique email) error
    if (err.code === 11000) {
      return res.status(409).json({ error: 'Email already exists' })
    }
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})








connectDB()
.then(()=>{
	console.log("DB is live!!");
	app.listen(process.env.PORT,()=>{
	console.log("Your server is running!!");
    })
})
.catch((err) =>{
	console.log("error->",err);
})

