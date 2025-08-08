import express, { json } from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./src/db/db.js" 
import { expense } from "./src/models/expense.model.js";

dotenv.config('./env')
const app = express()
const PORT = process.env.PORT|| 8000

app.use(express.json())
app.use(cors({origin: process.env.CORS_ORIGIN}))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

// Import Route
import addExpendeRoute from "./src/route/exprense.route.js"

//  Routes
app.use('/api/expense', addExpendeRoute)

app.listen(PORT, () => {
    console.log("Server is listening at", PORT);
    connectDB()
    
})