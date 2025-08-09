import express, { json } from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./src/db/db.js" 
import cookieParser from "cookie-parser"
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config('./env')
const app = express()
const PORT = process.env.PORT|| 8000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())
app.use(cors({origin: process.env.CORS_ORIGIN}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser()); // To parse cookies for authentication
app.use(express.static(path.join(__dirname, 'public'))); // To serve static files like CSS and script.js


// Import Route
import staticRoute from "./src/route/exprense.route.js"

//  Routes
app.use('/', staticRoute)

app.listen(PORT, () => {
    console.log("Server is listening at", PORT);
    connectDB()
    
})