import express from 'express'
import { config } from 'dotenv'
import { connectDB } from './database/config.js'
config()

const app = express()
app.use(express.json())

connectDB()
app.listen(process.env.PORT, ()=> console.log('server is running on port ', process.env.PORT))